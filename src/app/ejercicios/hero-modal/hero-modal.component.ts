import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Hero } from '../hero.interface';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-hero-modal',
  templateUrl: './hero-modal.component.html',
  styleUrls: ['./hero-modal.component.css']
})
export class HeroModalComponent implements OnInit {
  @Input() hero: Hero = {};

  @Output() newHeroEvent = new EventEmitter<any>();

  constructor(public activeModal: NgbActiveModal, private httpService: HttpService) { }

  ngOnInit(): void {
  }
  onFileChanged(event: any) {
    if (event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        this.hero.thumbnailEdit = true
        this.hero.thumbnail = event.target.result;
      }
    }
  }
  async save() {
    const isNewName = await this.isNewName()
    if (isNewName) {
      const now = new Date()
      this.hero.modified = now.toString()
      this.activeModal.close(this.hero)
    }
  }
  async isNewName(): Promise<boolean> {
    const response = await this.httpService.getHeroesByName(this.hero.name!) as any
    if (response.data.results.length > 0) {
      alert("Ya existe este Héroe")
      return false
    } else {
      return true;
    }
  }
}
