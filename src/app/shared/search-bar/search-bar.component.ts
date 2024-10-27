import { Component, EventEmitter, Output } from '@angular/core';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [NzInputModule, NzIconModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
})
export class SearchBarComponent {
  @Output() searchCard = new EventEmitter<string>();

  //TODO change any
  onInput(event: any) {
    this.searchCard.emit(event.target.value);
  }
}
