import { Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Tile } from '../intro/intro.component';

@Component({
  selector: 'rh-app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {

  compact$: Observable<boolean>;

  tiles: Tile[] = [
    {text: 'Wrapper', cols: 8, rows: 1, color: 'grey'},
    {text: '', cols: 1, rows: 4, color: 'grey'},
    {text: 'Sidenav', cols: 1, rows: 4, color: 'lightgrey'},
    {text: 'Header', cols: 5, rows: 1, color: 'lightgrey'},
    {text: '', cols: 1, rows: 4, color: 'grey'},
    {text: 'Content', cols: 5, rows: 3, color: 'white'},
    {text: '', cols: 8, rows: 1, color: 'grey'},
  ];

  subtitle = '<rh-shell-wrapper>';

  constructor(private media: MediaObserver) { }

  ngOnInit(): void {
    this.compact$ = this.media.asObservable().pipe(
      map(mediaMatch => {
        return !mediaMatch.find(change => change.mqAlias === 'lt-sm');
      }),
    );
  }

}
