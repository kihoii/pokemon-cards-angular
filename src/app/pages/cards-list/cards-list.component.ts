import { Component, inject } from '@angular/core';
import { CardResponse } from '../../interfaces/CardResponse';
import { CardService } from '../../services/card.service';
import { CardItemComponent } from '../../shared/card-item/card-item.component';

@Component({
  selector: 'app-cards-list',
  standalone: true,
  imports: [CardItemComponent],
  templateUrl: './cards-list.component.html',
  styleUrl: './cards-list.component.scss',
})
export class CardsListComponent {
  cardService: CardService = inject(CardService);
  cards: CardResponse[] = [];

  constructor() {
    this.cardService.getCards().subscribe((resp: any) => {
      this.cards = resp.data;
    });
  }
}
