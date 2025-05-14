import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class UsuarioService {

  private apiUrl = 'https://localhost:44315/api/Usuario';

  constructor(private http: HttpClient) { }

  verificarUsuario(Nombre: string, Clave: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/verificar`, { Nombre, Clave });
  }

  crearUsuario(Nombre: string, Clave: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/crear`, { Nombre, Clave });
  }

  verificarExistencia(Nombre: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/VerificarExistencia/${Nombre}`);
  }
}
