import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadingStrategy, PreloadAllModules } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { DoctorComponent } from './doctor/doctor.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

// -----------------------------------------------------------




const routes: Routes = [
 
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  {path: 'doctor' , component : DoctorComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },






  // -----------------------------------------------------


  


  // {path: '', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    { preloadingStrategy: PreloadAllModules}    ), NgxDatatableModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }