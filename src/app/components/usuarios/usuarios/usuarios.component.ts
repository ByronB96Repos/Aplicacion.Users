import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Cargo } from 'src/app/models/cargo';
import { Departamento } from 'src/app/models/departamento';
import { Usuario } from 'src/app/models/usuario';
import { CargoService } from 'src/app/services/cargo.service';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { UsuarioCreateModalComponent } from '../usuario-create-modal/usuario-create-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { UsuarioEditModalComponent } from '../usuario-edit-modal/usuario-edit-modal.component';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  displayedColumns: string[] = ['usuario', 'primernombre', 'primerapellido', 'departamento', 'cargo', 'acciones'];
  departamentos: Departamento[] = [];
  cargos: Cargo[] = [];
  usuarios: Usuario[] = [];
  dataSource = new MatTableDataSource<Usuario>();

  dataSourceOriginal: Usuario[] = [];
  selectedDepartamento: number =0;
  selectedCargo: number =0;

  constructor(
    private departamentoService: DepartamentoService,
    private cargoService: CargoService,
    private usuarioService: UsuarioService,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.departamentoService.getDepartamentos().subscribe((data) => {
      this.departamentos = data;
    });

    this.cargoService.getCargos().subscribe((data) => {
      this.cargos = data;
    });

    this.usuarioService.getUsuarios().subscribe((data) => {
      this.usuarios = data;
      this.dataSourceOriginal = [...data]; 
      this.dataSource.data = this.usuarios; 
      console.log(this.dataSource);
    });
  }

  filtrarTabla() {
    const selectedDepartamentoId = +this.selectedDepartamento;  
    const selectedCargoId = +this.selectedCargo;  
    console.log('cargo' + selectedCargoId);
    console.log('departamento' + selectedDepartamentoId);
    
    let data = this.dataSourceOriginal;
  
    if (selectedCargoId > 0 && selectedDepartamentoId > 0) {
      data = data.filter(item => item.idCargo === selectedCargoId && item.idDepartamento === selectedDepartamentoId);
    } 
    else if (selectedCargoId > 0) {
      data = data.filter(item => item.idCargo === selectedCargoId);
    } 
    else if (selectedDepartamentoId > 0) {
      data = data.filter(item => item.idDepartamento === selectedDepartamentoId);
    }
    this.dataSource.data = data; 
  }
  
  deleteCargo(id: number): void {
    const confirmDelete = window.confirm('¿Estás seguro de que deseas eliminar el usuario seleccionado?');
    if (confirmDelete) {
      this.usuarioService.deleteUsuario(id).subscribe(() => {
        this.usuarios = this.usuarios.filter(usuario => usuario.id !== id);
        this.dataSourceOriginal = [...this.usuarios]; 
        this.dataSource.data = this.usuarios; 
      });
    }
  }

  openCreateUserModal(): void {
    const dialogRef = this.dialog.open(UsuarioCreateModalComponent,{
      width: '600px',
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log('El modal se cerró', result);
    });
  }

  openEditUserModal(id: number): void {
    const dialogRef = this.dialog.open(UsuarioEditModalComponent,{
      width: '600px',
      data: { id }
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log('El modal se cerró', result);
    });
  }
}
