import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'ejercicios',
        pathMatch: 'full'
    },

    {
        path: "ejercicios",
        children: [
            {
                path: '',
                loadChildren: () => import('./ejercicios/ejercicios.module').then(m => m.EjerciciosModule)
            }

        ]
    }


];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
