import { Component, inject } from '@angular/core';
import { CardService } from '../../services/card.service';
import { CardItemComponent } from '../../shared/card-item/card-item.component';
import { CardsHolderComponent } from '../../shared/cards-holder/cards-holder.component';

@Component({
  selector: 'app-cards-list',
  standalone: true,
  imports: [CardItemComponent, CardsHolderComponent],
  templateUrl: './cards-list.component.html',
  styleUrl: './cards-list.component.scss',
})
export class CardsListComponent {}
