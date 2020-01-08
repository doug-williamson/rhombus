import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rhombus-widget-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class RhombusWidgetListComponent implements OnInit {

  @Input()
  headerText = '';

  @Input()
  color = '';

  @Input()
  content: Array<string>;

  constructor() { }

  ngOnInit() {

  }

}
