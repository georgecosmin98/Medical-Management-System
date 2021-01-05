import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadingStrategy, PreloadAllModules } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { DoctorComponent } from './doctor/doctor.component';

// -----------------------------------------------------------




const routes: Routes = [
 
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {path: 'doctor' , component : DoctorComponent },





  // -----------------------------------------------------


  


  // {path: '', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    { preloadingStrategy: PreloadAllModules}    ), NgxDatatableModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }