import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Cargo } from 'src/app/models/cargo';
import { CargoService } from 'src/app/services/cargo.service';

@Component({
  selector: 'app-cargos',
  templateUrl: './cargos.component.html',
  styleUrls: ['./cargos.component.css']
})
export class CargosComponent implements OnInit{
  displayedColumns: string[] = ['id', 'codigo', 'nombre', 'activo', 'acciones'];
  cargos: Cargo[] = [];
  dataSource = new MatTableDataSource<Cargo>();


  constructor(private cargoService: CargoService) {}

  ngOnInit(): void {
    this.cargoService.getCargos().subscribe((data) => {
      this.cargos = data;
      console.log(this.cargos);
      this.dataSource.data = this.cargos; // Asignar datos al dataSource
    });
  }


  deleteCargo(id: number): void {
    this.cargoService.deleteCargo(id).subscribe(() => {
      this.cargos = this.cargos.filter(cargo => cargo.id !== id);
      this.dataSource.data = this.cargos; // Actualizar dataSource después de eliminar
    });
  }
}
