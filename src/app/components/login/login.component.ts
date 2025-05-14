import { UsuarioService } from './../../services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  Nombre: string = '';
  Clave: string = '';
  mensaje: string  = '';

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  login(): void {
    if (!this.Nombre || !this.Clave) {
      alert('Por favor ingresa usuario y contraseña');
      return;
    }
  
    this.usuarioService.verificarExistencia(this.Nombre).subscribe(
      (existe: boolean) => {
        if (existe) {
          // Verificar contraseña
          this.usuarioService.verificarUsuario(this.Nombre, this.Clave).subscribe(
            (valido: boolean) => {
              if (valido) {
                alert('Login exitoso');
                this.router.navigate(['/vehiculos']);
              } else {
                alert('La contraseña es incorrecta.');
              }
            },
            error => {
              alert('Contraseña Incorrecta');
              console.error('Error al verificar la contraseña', error);
            }
          );
        } else {
          // Usuario no existe
          const confirmar = confirm('El usuario no existe. ¿Deseas crearlo?');
          if (confirmar) {
            this.crearUsuario();
          }
        }
      },
      error => {
        console.error('Error al verificar existencia del usuario', error);
      }
    );
  }

  crearUsuario(): void {
    this.usuarioService.crearUsuario(this.Nombre, this.Clave).subscribe(
      (mensaje) => {
        alert('Usuario creado exitosamente. Ahora puedes iniciar sesión.');
        window.location.reload(); // Recargar la página para intentar ingresar con el nuevo usuario
      },
      (error) => {
        console.error('Error al crear el usuario', error);
        alert('No se pudo crear el usuario');
      }
    );
  }
}
 
