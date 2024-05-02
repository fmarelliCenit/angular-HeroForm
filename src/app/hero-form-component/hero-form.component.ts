import { Component } from '@angular/core';

import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroForm {

  powers = ['Gum Gum no Mi', 'Super Flexible',
    'Unbreackable', 'Haki'];

  model = new Hero(18, 'Luffy', this.powers[0], 'Rubber');

  submitted = false;

  onSubmit() { this.submitted = true; }

  newHero() {
    this.model = new Hero(42,'','');
  }
}
