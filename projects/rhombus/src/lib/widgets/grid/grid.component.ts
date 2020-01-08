import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rhombus-widget-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class RhombusWidgetGridComponent implements OnInit {

  @Input()
  columns = 1;

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
