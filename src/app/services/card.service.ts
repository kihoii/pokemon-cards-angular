import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_KEY, BASE_URL } from './helpers';
import { CardResponse } from '../interfaces/CardResponse';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  headers: HttpHeaders = new HttpHeaders();

  constructor(private http: HttpClient) {
    this.headers.set('X-Api-Key', API_KEY);
  }

  public baseGet(url: string) {
    return this.http.get(BASE_URL + url, { headers: this.headers });
  }

  public getCards(page: number, pageSize: number) {
    return this.baseGet(`cards?page=${page}&pageSize=${pageSize}`);
  }
}
