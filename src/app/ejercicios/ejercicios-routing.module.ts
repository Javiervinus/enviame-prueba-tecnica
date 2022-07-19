import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ejercicio3Component } from './ejercicio3/ejercicio3.component';
import { EjerciciosPanelComponent } from './ejercicios-panel/ejercicios-panel.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '1-2',
        pathMatch: 'full'
    },

    {
        path: "1-2",
        component: EjerciciosPanelComponent
    },
    {
        path: "3",
        component: Ejercicio3Component
    },



];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EjerciciosRoutingModule { }
