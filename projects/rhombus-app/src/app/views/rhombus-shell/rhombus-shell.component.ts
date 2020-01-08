import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rhombus-app-rhombus-shell',
  templateUrl: './rhombus-shell.component.html',
  styleUrls: ['./rhombus-shell.component.scss'],
})
export class RhombusShellComponent implements OnInit {

  _columns: number;
  _headerText = 'Rhombus Shell';
  _color = 'primary';
  _contentList = [ 'Item 1', 'Item 2', 'Item 3' ];

  constructor() { }

  ngOnInit() {
  }

}
