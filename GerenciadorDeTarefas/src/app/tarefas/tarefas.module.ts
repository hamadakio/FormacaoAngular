import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefaService ,ConcluidaDirective } from './shared';
import { ListarTarefaComponent } from './listar';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CadastrarTarefaComponent } from './cadastrar';
import { EditarTarefaComponent } from './editar';




@NgModule({
  declarations: [
    ListarTarefaComponent,
    CadastrarTarefaComponent,
    EditarTarefaComponent,
    ConcluidaDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    TarefaService
  ]
})
export class TarefasModule { }
