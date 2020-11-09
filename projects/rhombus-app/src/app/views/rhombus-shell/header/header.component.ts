import { Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { Tile } from '../intro/intro.component';

@Component({
  selector: 'rhombus-app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  tiles: Tile[] = [
    {text: 'Wrapper', cols: 8, rows: 1, color: 'grey'},
    {text: '', cols: 1, rows: 4, color: 'grey'},
    {text: 'Sidenav', cols: 1, rows: 4, color: 'lightgrey'},
    {text: 'Header', cols: 5, rows: 1, color: 'lightgrey'},
    {text: '', cols: 1, rows: 4, color: 'grey'},
    {text: 'Content', cols: 5, rows: 3, color: 'white'},
    {text: '', cols: 8, rows: 1, color: 'grey'},
  ];

  subtitle = '<rh-shell-header>';

  constructor(public media: MediaObserver) { }

  ngOnInit(): void {
  }

}
