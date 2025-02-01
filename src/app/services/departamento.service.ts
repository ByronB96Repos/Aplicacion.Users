import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Departamento } from '../models/departamento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  private apiUrl = `${environment.apiUrl}departamentos/`;
  
    constructor(private http: HttpClient) {}
  
    getDepartamentos(): Observable<Departamento[]> {
      return this.http.get<Departamento[]>(this.apiUrl);
    }
  
    createDepartamento(departamento: Departamento): Observable<Departamento> {
      return this.http.post<Departamento>(this.apiUrl, departamento);
    }
  
    updateDepartamento(id: number, departamento: Departamento): Observable<Departamento> {
      return this.http.put<Departamento>(`${this.apiUrl}${id}/`, departamento);
    }
  
    deleteDepartamento(id: number): Observable<{}> {
      return this.http.delete(`${this.apiUrl}${id}/`);
    }
}
