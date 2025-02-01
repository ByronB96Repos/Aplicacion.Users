import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Cargo } from 'src/app/models/cargo';
import { Departamento } from 'src/app/models/departamento';
import { CargoService } from 'src/app/services/cargo.service';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { UsuarioService } from 'src/app/services/usuario.service';
@Component({
  selector: 'app-usuario-create-modal',
  templateUrl: './usuario-create-modal.component.html',
  styleUrls: ['./usuario-create-modal.component.css']
})
export class UsuarioCreateModalComponent implements OnInit {
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
    public dialogRef: MatDialogRef<UsuarioCreateModalComponent>,
    private departamentoService: DepartamentoService,
    private cargoService: CargoService,
    private usuarioService: UsuarioService,
  ) {
  }

  ngOnInit(): void {
    this.departamentoService.getDepartamentos().subscribe((data) => {
      this.departamentos = data;
    });

    this.cargoService.getCargos().subscribe((data) => {
      this.cargos = data;
    });

  }

  cancelar(): void {
    this.dialogRef.close();
  }

  registrar(): void {
    console.log('Formulario enviado con los datos:', this.usuario);
    const user = this.usuario;
    
    this.usuarioService.createUsuario(user).subscribe((data) => {
      console.log('Usuario creado', data);
      this.dialogRef.close();
      window.location.reload();
    })
  }
}
  