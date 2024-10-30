import { Component, Input } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { CardDataResponse } from '../../interfaces/CardDataResponse';

@Component({
  selector: 'app-card-item',
  standalone: true,
  imports: [NzCardModule],
  templateUrl: './card-item.component.html',
  styleUrl: './card-item.component.scss',
})
export class CardItemComponent {
  @Input() card!: CardDataResponse;
}
