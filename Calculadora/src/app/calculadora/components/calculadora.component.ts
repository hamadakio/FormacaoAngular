import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '../services';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  private numero1: string;
  private numero2: string;
  private resultado: number;
  private operacao: string;

  //injeçao de dependencias sera dentro do construtor
  constructor(private calculadoraService: CalculadoraService) { }

  /*requisitos para criação do objeto de forma segura e rapida
  chamada de dados */
  ngOnInit(): void {
    this.limpar();
  }

  limpar(): void {
    this.numero1 = '0';
    this.numero2 = null;
    this.resultado = null;
    this.operacao = null;
  }

  adicionarNumero(numero: string): void {
    // se nao tiver nenhuma operacao quer dizer que é o primeiro numero
    if (this.operacao === null) {
      this.numero1 = this.concatenarNumero(this.numero1, numero);
    } else {
      //senao é o segundo numero [ex: 5 + ]
      this.numero2 = this.concatenarNumero(this.numero2, numero);
    }
  }

  concatenarNumero(numAtual: string, numConcat: string): string {
    //caso contenha apenas 0 ou null , reinicia o valor
    if (numAtual === '0' || numAtual === null) {
      numAtual = '';
    }

    //se o primeiro digito for . , concatena com 0 antes do ponto
    if (numConcat === "." && numAtual === '') {
      return '0.';
    }

    //caso digite . e ja tenha um . , apenas retorna
    if (numConcat === '.' && numAtual.indexOf('.') > -1) {
      return numAtual;
    }

    return numAtual + numConcat;
  }

  definirOperacao(operacao:string): void{
    //apenas define a operacao caso nao exista uma
    if (this.operacao === null) {
      this.operacao = operacao;
      return;
    }

    /*caso o numero 2 seja diferente de null ele executa
    a operacao e coloca o resultado no numero1 , assim
    o usuario pode continuar com uma operacao maior
    [ex: 1+5+8+56-4...]
    */
    if (this.numero2 !== null) {
      this.resultado = this.calculadoraService.calcular(
        parseFloat(this.numero1),
        parseFloat(this.numero2),
        this.operacao
      );
      this.operacao = operacao;
      this.numero1 = this.resultado.toString();
      this.numero2 = null;
      this.resultado = null;
    }
  }

  calcular():void{
    if (this.numero2 === null) {
      return;
    }

    this.resultado = this.calculadoraService.calcular(
      parseFloat(this.numero1),
      parseFloat(this.numero2),
      this.operacao
    );
  }

  get display(): string{
    if (this.resultado !== null) {
      return this.resultado.toString();
    }
    if (this.numero2 !== null) {
      return this.numero2;
    }
    return this.numero1;
  }


}
