import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraComponent } from './components';
import { CalculadoraService } from './services';



@NgModule({
  declarations: [
    CalculadoraComponent
  ],
  imports: [
    CommonModule
  ],
  //exports
  exports: [CalculadoraComponent],
  //injeção de dependencias *@Injectable
  providers: [
    CalculadoraService
  ]

})
export class CalculadoraModule { }
