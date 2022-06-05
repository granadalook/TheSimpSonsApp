import { Component, OnInit } from '@angular/core';
import { AllcharactersService } from 'src/app/core/services/allcharacters/allcharacters.service';
import { TheSimpsons } from 'src/app/models/theSimpsom.model';

@Component({
  selector: 'app-allcharacters',
  templateUrl: './allcharacters.component.html',
  styleUrls: ['./allcharacters.component.scss'],
})
export class AllcharactersComponent implements OnInit {
  cantidad?: number;
  characters: Array<TheSimpsons> | null | undefined;

  constructor(private allcharactes: AllcharactersService) {}

  ngOnInit(): void {}

  getCharacters() {
    this.allcharactes.getAll(this.cantidad).subscribe((respuesta) => {
      this.characters = respuesta;
    });
  }
}
