import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Departamento } from 'src/app/models/departamento';
import { DepartamentoService } from 'src/app/services/departamento.service';

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.css']
})
export class DepartamentosComponent implements OnInit {

  displayedColumns: string[] = ['id', 'codigo', 'nombre', 'activo', 'acciones'];
    departamentos: Departamento[] = [];
    dataSource = new MatTableDataSource<Departamento>();
    
    constructor(private departamentoService: DepartamentoService) {}
    
    ngOnInit(): void {
      this.departamentoService.getDepartamentos().subscribe((data) => {
        this.departamentos = data;
        console.log(this.departamentos);
        this.dataSource.data = this.departamentos; // Asignar datos al dataSource
      });
    }
  
  
    deleteCargo(id: number): void {
      this.departamentoService.deleteDepartamento(id).subscribe(() => {
        this.departamentos = this.departamentos.filter(departamento => departamento.id !== id);
        this.dataSource.data = this.departamentos; // Actualizar dataSource después de eliminar
      });
    }

}
