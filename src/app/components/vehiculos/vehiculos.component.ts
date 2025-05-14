import { Component, OnInit } from '@angular/core';
import { VehiculoService } from 'src/app/services/vehiculo.service';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculosComponent implements OnInit {
  vehiculos: any[] = [];
  vehiculoEditando: any = null;

  // CAMBIAR los nombres a mayúsculas para coincidir con el backend
  nuevoVehiculo: any = {
    Placa: '',
    TipoVehiculo: '',
    EsHibridoOElectrico: 0,
    HoraIngreso: '',
    HoraSalida: null,
    PlazaAsignada: 0
  };

  constructor(private vehiculoService: VehiculoService) { }

  ngOnInit(): void {
    this.obtenerVehiculos();
  }

  obtenerVehiculos(): void {
    this.vehiculoService.listarVehiculos().subscribe(
      (data) => {
        console.log('Datos recibidos:', data);
        this.vehiculos = data;
      },
      (error) => {
        console.error('Error al obtener los vehículos', error);
      }
    );
  }

  agregarVehiculo(): void {
    this.vehiculoService.crearVehiculo(this.nuevoVehiculo).subscribe(
      (mensaje) => {
        alert(mensaje);
        this.obtenerVehiculos();
        // Limpiar el formulario
        this.nuevoVehiculo = {
          Placa: '',
          TipoVehiculo: '',
          EsHibridoOElectrico: 0,
          HoraIngreso: '',
          HoraSalida: null,
          PlazaAsignada: 0
        };
      },
      (error) => {
        console.error('Error al agregar el vehículo', error);
      }
    );
  }

  eliminarVehiculo(id: number): void {
    this.vehiculoService.eliminarVehiculo(id).subscribe(
      (mensaje) => {
        alert(mensaje);
        this.obtenerVehiculos();
        location.reload()
      },
      (error) => {
        console.error('Error al eliminar el vehículo', error);
      }
    );
  }

  validarYAgregarVehiculo(): void {
    const v = this.nuevoVehiculo;
  
    if (!v.placa || !v.tipoVehiculo || v.esHibridoOElectrico === null || !v.horaIngreso || !v.plazaAsignada) {
      alert('Todos los campos obligatorios deben ser completados:\n- Placa\n- Tipo de Vehículo\n- ¿Es Híbrido o Eléctrico?\n- Hora de Ingreso\n- Plaza Asignada');
      return;
    }
  
    this.agregarVehiculo();
  }
  editarVehiculo(vehiculo: any): void {
    this.vehiculoEditando = { ...vehiculo };
  }

  guardarCambios(): void {
    if (!this.vehiculoEditando || !this.vehiculoEditando.Id) return;
  
    this.vehiculoService.actualizarVehiculo(this.vehiculoEditando.Id, this.vehiculoEditando).subscribe(
      (mensaje) => {
        alert(mensaje);
        this.vehiculoEditando = null;
        this.obtenerVehiculos();
      },
      (error) => {
        alert('Error al actualizar el vehículo');
      }
    );
  }
  

  cancelarEdicion(): void {
    this.vehiculoEditando = null;
  }
  
}
