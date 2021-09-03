import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[tarefaConcluida]'
})
export class ConcluidaDirective implements OnInit {

  @Input() tarefaConcluida: boolean;
  //referencia de um elemento html
  constructor(private el: ElementRef) { }

  ngOnInit(): void {
   if (this.tarefaConcluida) {
     this.el.nativeElement.style.textDecoration = "line-through";
   }
  }

}
