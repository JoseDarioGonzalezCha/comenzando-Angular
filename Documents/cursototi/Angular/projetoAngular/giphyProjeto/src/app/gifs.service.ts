import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GifsService  {

  constructor(private http: HttpClient) { }

  api_key = '9shn8VyCsU2lFXRmjfI0Dc6IpkYFUABU';
  limit = '24';
  url = 'https://api.giphy.com/v1/gifs/search';
  q: string;

  getApiGift(q) {
    console.log(q);
    let url = `${this.url}?api_key=${this.api_key}&q=${q}&limit=${this.limit}`;
    return this.http.get(url);
  }
}
