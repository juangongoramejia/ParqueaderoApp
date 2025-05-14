import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  private apiUrl = 'https://localhost:44315/api/vehiculos';

  constructor(private http: HttpClient) { }

  listarVehiculos(): Observable<any> {
    return this.http.get(`${this.apiUrl}/Listar`);
  }

  crearVehiculo(vehiculo: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/Crear`, vehiculo);
  }

  actualizarVehiculo(id: number, vehiculo: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/Actualizar/${id}`, vehiculo);
  }

  eliminarVehiculo(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/Eliminar/${id}`);
  }

}
