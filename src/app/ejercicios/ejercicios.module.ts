import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EjerciciosRoutingModule } from './ejercicios-routing.module';
import { Ejercicio1Component } from './ejercicio1/ejercicio1.component';
import { Ejercicio2Component } from './ejercicio2/ejercicio2.component';
import { Ejercicio3Component } from './ejercicio3/ejercicio3.component';
import { EjerciciosPanelComponent } from './ejercicios-panel/ejercicios-panel.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';



@NgModule({
  declarations: [
    Ejercicio1Component,
    Ejercicio2Component,
    Ejercicio3Component,
    EjerciciosPanelComponent
  ],
  imports: [
    CommonModule,
    EjerciciosRoutingModule,
    NgbModule,
    FormsModule,
    InfiniteScrollModule
  ]
})
export class EjerciciosModule { }
