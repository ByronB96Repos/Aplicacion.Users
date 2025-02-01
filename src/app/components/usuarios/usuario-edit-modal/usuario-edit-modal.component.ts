import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Cargo } from 'src/app/models/cargo';
import { Departamento } from 'src/app/models/departamento';
import { CargoService } from 'src/app/services/cargo.service';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario-edit-modal',
  templateUrl: './usuario-edit-modal.component.html',
  styleUrls: ['./usuario-edit-modal.component.css']
})
export class UsuarioEditModalComponent implements OnInit {

  public id: number = 0;
  usuario = {
      usuario: '',
      primerNombre: '',
      segundoNombre: '',
      primerApellido: '',
      segundoApellido: '',
      idDepartamento: 0,
      idCargo: 0
    };
  
      departamentos: Departamento[] = [];
      cargos: Cargo[] = [];
  
    constructor(
      public dialogRef: MatDialogRef<UsuarioEditModalComponent >,
      private departamentoService: DepartamentoService,
      private cargoService: CargoService,
      private usuarioService: UsuarioService,
      @Inject(MAT_DIALOG_DATA) public data: any
    ) {}
  
    ngOnInit(): void {
      this.departamentoService.getDepartamentos().subscribe((data) => {
        this.departamentos = data;
      });
  
      this.cargoService.getCargos().subscribe((data) => {
        this.cargos = data;
      });
      this.id = this.data.id;
      this.usuarioService.getUsuario(this.id).subscribe((data)=>{
        this.usuario = data;
      }); 
    }
  
    cancelar(): void {
      this.dialogRef.close();
    }
  
    registrar(): void {
      this.id = this.data.id;
      console.log('Formulario enviado con los datos:', this.usuario);
      const user = this.usuario;
      
      this.usuarioService.updateUsuario(this.id,user).subscribe((data) => {
        console.log('Usuario Modificado', data);
        this.dialogRef.close();
        window.location.reload();
      })
    }

}
