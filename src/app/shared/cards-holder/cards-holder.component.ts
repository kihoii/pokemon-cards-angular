import { Component, inject, Input } from '@angular/core';
import { CardResponse } from '../../interfaces/CardResponse';
import { CardItemComponent } from '../card-item/card-item.component';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-cards-holder',
  standalone: true,
  imports: [CardItemComponent, NzPaginationModule],
  templateUrl: './cards-holder.component.html',
  styleUrl: './cards-holder.component.scss',
})
export class CardsHolderComponent {
  @Input() cardsId?: CardResponse[];

  cardService: CardService = inject(CardService);
  cards: CardResponse[] = [];

  curPage: number = 1;
  pageSize: number = 6;
  maxCards: number;

  constructor() {
    if (!this.cardsId) {
      this.getCards();
      this.maxCards = 250;
    } else {
      this.getRequestedCards();
      this.maxCards = this.cardsId.length;
    }
  }

  onPageChanged(index: number) {
    this.curPage = index;
    this.getCards();
  }

  getCards() {
    this.cardService
      .getCards(this.curPage, this.pageSize)
      .subscribe((resp: any) => {
        this.cards = resp.data;
      });
  }

  getRequestedCards() {}
}
