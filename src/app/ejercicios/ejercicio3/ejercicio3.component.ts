import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HeroModalComponent } from '../hero-modal/hero-modal.component';
import { HttpService } from '../service/http.service';
import { Hero } from '../hero.interface';

@Component({
  selector: 'app-ejercicio3',
  templateUrl: './ejercicio3.component.html',
  styleUrls: ['./ejercicio3.component.css']
})
export class Ejercicio3Component implements OnInit {
  filterName: string = ""
  heroes: Hero[] = []
  offset: number = 0
  heroesLoading: boolean = false
  constructor(private httpService: HttpService, private modal: NgbModal) { }

  ngOnInit(): void {
    this.getHeroes()
  }
  onScroll() {
    this.offset += 20
    this.getHeroes()
  }
  async getHeroes() {
    this.heroesLoading = true
    const response = await this.httpService.getHeroes(this.offset) as any
    if (response) {
      this.heroes = [...this.heroes, ...response.data.results]
    }
    this.heroesLoading = false
  }
  async search() {
    if (this.filterName == '') {
      this.offset = 0
      this.heroes = []
      this.getHeroes()
      return
    }
    const response = await this.httpService.getHeroesStartsBy(this.filterName) as any
    if (response) {
      this.heroes = response.data.results
    }
  }
  openModal(index: number, hero: any = null) {
    let heroObj: any = {};
    if (hero) {
      heroObj = Object.assign({}, hero)
      heroObj.index = index

    }
    const modalRef = this.modal.open(HeroModalComponent, { centered: true, scrollable: true })
    modalRef.componentInstance.hero = hero ? heroObj : { thumbnailEdit: false }
    modalRef.result.then((result) => {

      if (result.index >= 0) {
        this.edit(result)
      } else {

        this.add(result)
      }
    }).catch((error: any) => {
      console.log(error)
    })
  }
  edit(hero: Hero) {
    this.heroes[hero.index!] = hero

  }
  add(hero: Hero) {

    if (!hero.thumbnailEdit) {
      hero.thumbnail = "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
    }
    hero.thumbnailEdit = true
    this.heroes.unshift(hero)
  }

}
