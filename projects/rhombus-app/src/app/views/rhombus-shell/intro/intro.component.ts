import { Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'rhombus-app-shell-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent implements OnInit {

  tiles: Tile[] = [
    {text: 'Wrapper', cols: 8, rows: 1, color: 'grey'},
    {text: '', cols: 1, rows: 4, color: 'grey'},
    {text: 'Sidenav', cols: 1, rows: 4, color: 'lightgrey'},
    {text: 'Header', cols: 5, rows: 1, color: 'lightgrey'},
    {text: '', cols: 1, rows: 4, color: 'grey'},
    {text: 'Content', cols: 5, rows: 3, color: 'white'},
    {text: '', cols: 8, rows: 1, color: 'grey'},
  ];

  constructor(public media: MediaObserver) { }

  ngOnInit(): void {
  }

  goToLink(url: string) {
    window.open(url, '_blank');
  }

}
