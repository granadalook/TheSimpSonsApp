import { Component, OnInit } from '@angular/core';
import { RamdomcharactersService } from 'src/app/core/services/ramdonCharacters/ramdomcharacters.service';
import { TheSimpsons } from 'src/app/models/theSimpsom.model';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  characterRandoms: Array<TheSimpsons> | null | undefined;

  constructor(private ramdonservice: RamdomcharactersService) {}

  ngOnInit(): void {}

  ramdomCharacter() {
    this.ramdonservice.get().subscribe((respuesta) => {
      this.characterRandoms = respuesta;
    });
  }
}
