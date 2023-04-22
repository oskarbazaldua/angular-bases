import { Component } from '@angular/core';
import { dbzService } from '../service/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  constructor(public dbzService: dbzService) {}

  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  onDeletCharater( id: string ):void {
    this.dbzService.deleteCharacterById( id );
  }

  onNewCharacter (character: Character) {
    this.dbzService.addCharacter ( character );
  }

}
