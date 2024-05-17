import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sueldo',
  templateUrl: './sueldo.page.html',
  styleUrls: ['./sueldo.page.scss'],
})
export class SueldoPage implements OnInit {
  sueldo!: number;
  sueldoSalud! : number;
  sueldoPension! : number;
  sueldoTotal! : number;
  reteFuente!: number;
  ingresoSolidario!: number;
  descSalud!: number;
  descPension!: number;
  bono1 : number = 250000;
  bono2 : number = 200000;
  bono3 : number = 100000;
  valor: number = 0;

  constructor() { }

  ngOnInit() {
  }

  calcularRet(valor: number){
    this.sueldo = valor;
    if(valor >= 4000000)
    this.reteFuente = this.sueldo * 0.04; 
    else if (valor < 4000000)
      console.log('No se puede aplicar RETEFUENTE');
    this.sueldo = valor;
  }

  calcularIngSolidario(valor: number){
    this.ingresoSolidario = 0
    if (valor >= 4000000)
      this.ingresoSolidario = valor - 80000
  }

  calcularSalud(valor: number){
    this.descPension = valor * 0.03;
    this.descSalud = valor * 0.03;
    this.sueldoPension = valor - this.descPension;
    this.sueldoSalud = valor - this.descSalud;
    this.sueldoTotal = valor - this.descSalud - this.descPension;
  }

  calcularBono(valor: number){
    if(valor < 2000000){
      this.sueldoTotal = valor + this.bono1;
    }
    if (valor >= 2000000 && valor < 3500000){
      this.sueldoTotal = valor + this.bono2;
    }
    if (valor >= 3500000){
      this.sueldoTotal = valor + this.bono3;
    }


}}
