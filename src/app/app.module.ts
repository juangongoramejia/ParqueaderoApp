import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { VehiculosComponent } from './components/vehiculos/vehiculos.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    VehiculosComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  // Aquí importamos el módulo de rutas
    HttpClientModule,
    FormsModule  // Importar para hacer peticiones HTTP
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
