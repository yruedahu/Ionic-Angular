import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator-page',
  templateUrl: './calculator-page.page.html',
  styleUrls: ['./calculator-page.page.scss'],
})
export class CalculatorPagePage {
  n1!: number;
  n2!: number;
  resultResiduo!: number;
  resultParImpar!: string;
  factorialResult!: number | null;
  numeroFactorial!: number;
  resultParImparNumero2!: string;
  resultadoSuma!: number;
  resultadoResta!: number;
  resultadoMultipli!: number;
  resultadoDiv!: number;
  isNaN: boolean = false;
  serieFibbon: number[] = [];
  fibonacciLimit: number | undefined;

  constructor() { }

  calcularResiduo() {
    this.resultResiduo = this.n1 % this.n2;
  }

  verificarParImpar(numero: number) {
    return numero % 2 === 0 ? 'par' : 'impar';
  }

  sumar() {
    this.resultadoSuma = this.n1 + this.n2;
  }

  restar() {
    this.resultadoResta = this.n1 - this.n2;
  }

  multiplicar() {
    this.resultadoMultipli = this.n1 * this.n2;
  }

  dividir() {
    if (this.n2 !== 0) {
      this.resultadoDiv = this.n1 / this.n2;
      this.isNaN = false;
    } else {
      this.resultadoDiv = NaN;
      this.isNaN = true;
    }
  }

  calcularFactorial() {
    if (this.numeroFactorial === undefined || this.numeroFactorial < 0) {
      this.factorialResult = null; 
      return;
    }
    
    let factorial = 1;
    for (let i = 1; i <= this.numeroFactorial; i++) {
      factorial *= i;
    }
    this.factorialResult = factorial;
  }
  
  

  fibonnaci() {
    if (this.fibonacciLimit !== undefined) {
      let a = 0;
      let b = 1;
      this.serieFibbon = [a, b];
      for (let i = 2; i < this.fibonacciLimit; i++) {
        let c = a + b;
        a = b;
        b = c;
        this.serieFibbon.push(c);
      }
    } else {
      console.error("El límite de Fibonacci no está definido");
    }
  }
}
