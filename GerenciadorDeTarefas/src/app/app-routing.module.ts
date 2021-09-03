import { NgModule } from "@angular/core";
import { Routes , RouterModule} from '@angular/router';

import { TarefaRoutes } from "./tarefas";

//lista de rotas
export const routes : Routes = [
    {
        path: '',
        redirectTo: '/tarefas/listar',
        pathMatch: 'full'
    },
    ...TarefaRoutes
];

@NgModule({
    //for root = singleton
    imports: [RouterModule.forRoot(routes)],
    //faz com que o modulo de rotas fique disponivel no mod principal
    exports: [RouterModule]
})

export class AppRoutingModule{}