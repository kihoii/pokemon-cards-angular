import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardsListComponent } from './pages/cards-list/cards-list.component';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardsListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'get-a-cat';
}
