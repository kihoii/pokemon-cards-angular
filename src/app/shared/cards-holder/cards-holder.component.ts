import { Component, inject, Input } from '@angular/core';
import { CardResponse } from '../../interfaces/CardResponse';
import { CardItemComponent } from '../card-item/card-item.component';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { CardService } from '../../services/card.service';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { LoaderComponent } from '../loader/loader.component';
import { AsyncPipe, KeyValuePipe, NgFor } from '@angular/common';
import { concatMap, map, Observable, Subscribable, Subscription } from 'rxjs';

@Component({
  selector: 'app-cards-holder',
  standalone: true,
  imports: [
    CardItemComponent,
    NzPaginationModule,
    SearchBarComponent,
    LoaderComponent,
    NgFor,
    AsyncPipe,
    KeyValuePipe,
  ],
  templateUrl: './cards-holder.component.html',
  styleUrl: './cards-holder.component.scss',
})
export class CardsHolderComponent {
  @Input() cardsId?: CardResponse[];

  cardService: CardService = inject(CardService);
  cards!: CardResponse[];

  obbCards$ = this;

  curPage: number = 1;
  pageSize: number = 8;
  maxCards: number;
  name: string = '';

  isLoading: boolean = false;

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
    this.isLoading = true;
    this.cardService
      .getCards$(this.curPage, this.pageSize, this.name)
      .subscribe((resp: any) => {
        this.cards = resp.data;
        this.isLoading = false;
      });
  }

  getRequestedCards() {}

  searchCards(value: string) {
    this.name = value;
    this.curPage = 1;
    this.getCards();
  }
}
