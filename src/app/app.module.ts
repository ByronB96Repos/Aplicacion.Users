import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { CargosComponent } from './components/cargos/cargos/cargos.component';
import { DepartamentosComponent } from './components/departamentos/departamentos/departamentos.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { UsuariosComponent } from './components/usuarios/usuarios/usuarios.component';
import { FormsModule } from '@angular/forms';
import { UsuarioCreateModalComponent } from './components/usuarios/usuario-create-modal/usuario-create-modal.component';
import { UsuarioEditModalComponent } from './components/usuarios/usuario-edit-modal/usuario-edit-modal.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    CargosComponent,
    DepartamentosComponent,
    UsuariosComponent,
    UsuarioCreateModalComponent,
    UsuarioEditModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule,
    MatChipsModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    MatDialogModule, 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
