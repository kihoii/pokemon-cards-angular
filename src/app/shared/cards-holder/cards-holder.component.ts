import { Component, inject, Input } from '@angular/core';
import { CardItemComponent } from '../card-item/card-item.component';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { CardService } from '../../services/card.service';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { LoaderComponent } from '../loader/loader.component';
import { AsyncPipe, NgFor } from '@angular/common';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { getAllCardsAction } from '../../store/actions/get-cards.action';
import {
  getCardsSelector,
  getCardsTotalCount,
  isLoadingCardsSelector,
} from '../../store/selectors';
import { CardDataResponse } from '../../interfaces/CardDataResponse';

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
    NzEmptyModule,
  ],
  templateUrl: './cards-holder.component.html',
  styleUrl: './cards-holder.component.scss',
})
export class CardsHolderComponent {
  @Input() cardsId?: CardDataResponse[];

  cardService: CardService = inject(CardService);
  store: Store = inject(Store);

  curPage: number = 1;
  pageSize: number = 8;
  name: string = '';

  isLoadingCards$!: Observable<boolean>;
  cards$!: Observable<CardDataResponse[]>;
  totalCount$!: Observable<number>;

  ngOnInit() {
    this.getCards();
    this.isLoadingCards$ = this.store.select(isLoadingCardsSelector);
    this.cards$ = this.store.select(getCardsSelector);
    this.totalCount$ = this.store.select(getCardsTotalCount);
  }

  getCards() {
    this.store.dispatch(
      getAllCardsAction({
        page: this.curPage,
        pageSize: this.pageSize,
        name: this.name,
      })
    );
  }

  getRequestedCards() {}

  onPageChanged(index: number) {
    this.curPage = index;
    this.getCards();
  }

  searchCards(value: string) {
    this.name = value;
    this.curPage = 1;
    this.getCards();
  }
}
