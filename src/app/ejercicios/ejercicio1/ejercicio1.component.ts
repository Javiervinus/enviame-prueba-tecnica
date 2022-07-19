import { Component, OnInit } from '@angular/core';
import { isPrime } from 'mathjs';

@Component({
  selector: 'app-ejercicio1',
  templateUrl: './ejercicio1.component.html',
  styleUrls: ['./ejercicio1.component.css']
})
export class Ejercicio1Component implements OnInit {

  initial: string = "";
  final: string = "";
  result: string = "";
  constructor() {

  }
  calculate() {
    this.initial = parseInt(this.initial).toString()
    this.final = parseInt(this.final).toString()

    const array: number[] = []
    if (parseInt(this.initial) > parseInt(this.final)) {
      alert("Valor inicial debe ser menor al valor final")
      return
    }
    for (let index = parseInt(this.initial); index <= parseInt(this.final); index++) {
      if (isPrime(index)) array.push(index)
    }
    if (array.length == 0) {
      this.result = "No existen números primos"
      return
    }
    this.result = array.toString()
  }

  ngOnInit(): void {
  }

}
