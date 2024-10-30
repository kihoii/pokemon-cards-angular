import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_KEY, BASE_URL } from './helpers';
import { Observable } from 'rxjs';
import { CardListResponse } from '../interfaces/CardListResponse';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  headers: HttpHeaders = new HttpHeaders();

  constructor(private http: HttpClient) {
    this.headers.set('X-Api-Key', API_KEY);
  }

  baseGet$(url: string): Observable<CardListResponse> {
    return this.http.get<CardListResponse>(BASE_URL + url, {
      headers: this.headers,
    });
  }

  public getCards$(
    page: number,
    pageSize: number,
    name?: string
  ): Observable<CardListResponse> {
    return this.baseGet$(
      `cards?page=${page}&pageSize=${pageSize}${name ? `&q=name:${name}*` : ''}`
    );
  }
}
