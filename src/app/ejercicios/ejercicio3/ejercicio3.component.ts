import { Component, OnInit } from '@angular/core';
import { HttpService } from '../service/http.service';
import { Hero } from './hero.interface';

@Component({
  selector: 'app-ejercicio3',
  templateUrl: './ejercicio3.component.html',
  styleUrls: ['./ejercicio3.component.css']
})
export class Ejercicio3Component implements OnInit {
  filterName: string = ""
  heroes: Hero[] = []
  hero: Hero = {}
  offset: number = 0
  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.getHeroes()
  }
  onScroll() {
    this.offset += 20
    this.getHeroes()
  }
  async getHeroes() {
    const response = await this.httpService.getHeroes(this.offset) as any
    if (response) {
      this.heroes = [...this.heroes, ...response.data.results]
    }
  }

}
