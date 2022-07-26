import { Component } from '@angular/core';
import { isPrime } from 'mathjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  initial: string = "";
  final: string = "";
  result: string = "";
  public isMenuCollapsed = true;

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
}
