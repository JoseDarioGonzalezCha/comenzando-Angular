import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariostbmService {

  usuarios: any = [];

  constructor(private http: HttpClient) { }

  getTodos() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');

  }
}
