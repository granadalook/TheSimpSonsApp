import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from './components/characters/characters.component';
import { AllcharactersComponent } from './components/allcharacters/allcharacters.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CharactersComponent, AllcharactersComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [CharactersComponent, AllcharactersComponent],
})
export class MemberssModule {}
