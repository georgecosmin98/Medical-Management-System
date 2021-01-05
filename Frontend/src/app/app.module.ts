import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiModule } from './api';
import { HttpClientModule } from '@angular/common/http';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';

import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';


import {MatDatepickerModule} from '@angular/material/datepicker';


import {MatNativeDateModule} from '@angular/material/core';


import { AgmCoreModule } from '@agm/core';

import {MatSortModule} from '@angular/material/sort';



import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { multicast } from 'rxjs-compat/operator/multicast';
import { DoctorComponent } from './doctor/doctor.component';









// ------------------------------------



@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    DoctorComponent,




    // ---------------------------------------





  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApiModule,
    FormsModule,
    HttpClientModule,
    NgxDatatableModule,
    AgmCoreModule.forRoot({
    }),
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatDatepickerModule




  ],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent],
  providers: [
    
  ]
})
export class AppModule { }