import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_KEY, BASE_URL } from './helpers';
import { CardResponse } from '../interfaces/CardResponse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  headers: HttpHeaders = new HttpHeaders();

  constructor(private http: HttpClient) {
    this.headers.set('X-Api-Key', API_KEY);
  }

  baseGet$(url: string): Observable<CardResponse[]> {
    return this.http.get<CardResponse[]>(BASE_URL + url, {
      headers: this.headers,
    });
  }

  public getCards$(
    page: number,
    pageSize: number,
    name?: string
  ): Observable<CardResponse[]> {
    return this.baseGet$(
      `cards?page=${page}&pageSize=${pageSize}${name ? `&q=name:${name}*` : ''}`
    );
  }
}
