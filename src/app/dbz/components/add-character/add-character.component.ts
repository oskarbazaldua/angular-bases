import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();


  public character: Character = {
    name: '',
    power: 0
  }

  emitCharacter():void {

    //validación para que acepte siempre nombre
    if (this.character.name.length === 0 ) return;

    //si viene nombre se manda llamar el .emit para enviar el character
    this.onNewCharacter.emit(this.character);

    this.character = {name: '', power: 0};
  }

}
