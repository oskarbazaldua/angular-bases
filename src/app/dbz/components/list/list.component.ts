import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }]


  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();



  //onDeletCharacter espera recibir un string | undefined
  //por ese motivo se pone el signo ? y se realiza la condicional if
  onDeletCharacter(id?: string): void {
    //si el id no existe ! no envia nada
    if (!id) return;

    this.onDelete.emit( id );
  }

}
