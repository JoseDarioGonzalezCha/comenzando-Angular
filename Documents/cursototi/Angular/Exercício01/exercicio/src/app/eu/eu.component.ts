import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eu',
  templateUrl: './eu.component.html',
  styleUrls: ['./eu.component.css']
})
export class EuComponent implements OnInit {

  nome: string = 'José Dario Gonzalez charris';
  idade: number = 35;
  gosto: string = 'Ler ciencias, Rock, Cerveja';
  cidade: string = 'Blumenau, SC';
  imagen: string = 'assets/foto/fotoportada.jpg'


  constructor() { }

  ngOnInit(): void {
  }

}
