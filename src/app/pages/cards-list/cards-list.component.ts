import { Component, inject } from '@angular/core';
import { CardResponse } from '../../interfaces/CardResponse';
import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-cards-list',
  standalone: true,
  imports: [],
  templateUrl: './cards-list.component.html',
  styleUrl: './cards-list.component.scss',
})
export class CardsListComponent {
  cardService: CardService = inject(CardService);
  cards: CardResponse[] = [];

  constructor() {
    this.cardService.getCards().subscribe((resp: any) => {
      console.log('pupupu');
      console.log(resp);
    });
  }
}
