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
  // Al hacer click en el botón
  emitCharacter():void {
    if (this.character.name.length === 0) return;
    // Emite lo que se escribe en el formulario
    this.onNewCharacter.emit(this.character);
    // Reset de los valores del formulario
    this.character = { name:'', power:0 }
  }

}
