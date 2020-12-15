import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IDynasty, IDynastyMark } from './dynasty';

@Component({
  selector: 'rh-dynasty',
  templateUrl: './dynasty.component.html',
  styleUrls: ['./dynasty.component.scss'],
})
export class RhDynastyComponent implements OnInit {

    @Input()
    dynasty: IDynasty = undefined;

    @Output() closed = new EventEmitter<boolean>();

    _selectedMark: IDynastyMark;
    dynastyMark$: Observable<IDynastyMark[]>;

    constructor() {}

    ngOnInit() {

    }

    clickClose() {
        this.closed.next(true);
    }

    selectMark(mark: IDynastyMark) {
        this._selectedMark = mark;
    }

}
