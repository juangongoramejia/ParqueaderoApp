import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VehiculosComponent } from './components/vehiculos/vehiculos.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  
  {path: '', component: LoginComponent },
  {path: 'vehiculos', component: VehiculosComponent }
  //{ path: '', redirectTo: '/vehiculos', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
