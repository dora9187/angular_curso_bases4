import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
    @Input()
    public characterList: Character[] =[{
        id: uuid(),
        name: 'Trunks',
        power: 10
    }];

    @Output()
    public onDelete: EventEmitter<string> = new EventEmitter();


    onDeleteCharacter(id?:string):void {
        // todo: Emitir el ID del personaje
        if ( !id ) return;
        this.onDelete.emit( id);
        console.log({id});
    }
}
