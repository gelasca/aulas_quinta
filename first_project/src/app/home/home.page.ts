import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  valor1: string;
  valor2: string;
  resultado: number;

  constructor() {
    this.valor1 = "0";
    this.valor2 = "0";
    this.resultado = 0;
  }

  calcular() {
    this.resultado = parseFloat(this.valor1) + parseFloat(this.valor2);
  }

  exibirResultado() {
    return this.resultado;
  }
}
