import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cargo } from '../models/cargo';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class CargoService {
  private apiUrl = `${environment.apiUrl}cargos/`;

  constructor(private http: HttpClient) {}

  getCargos(): Observable<Cargo[]> {
    return this.http.get<Cargo[]>(this.apiUrl);
  }

  createCargo(cargo: Cargo): Observable<Cargo> {
    return this.http.post<Cargo>(this.apiUrl, cargo);
  }

  updateCargo(id: number, cargo: Cargo): Observable<Cargo> {
    return this.http.put<Cargo>(`${this.apiUrl}${id}/`, cargo);
  }

  deleteCargo(id: number): Observable<{}> {
    return this.http.delete(`${this.apiUrl}${id}/`);
  }
}
