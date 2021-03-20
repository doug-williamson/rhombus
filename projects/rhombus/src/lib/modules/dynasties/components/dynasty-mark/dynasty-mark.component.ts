import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IDynasty, IDynastyMark } from '@dougwilliamson/rhombus';
import { RhDynastyMarkService } from '../../services/dynasty-mark.service';

@Component({
  selector: 'rh-dynasty-mark',
  templateUrl: './dynasty-mark.component.html',
  styleUrls: ['./dynasty-mark.component.scss']
})
export class DynastyMarkComponent implements OnInit {

  @Input()
  dynasty?: IDynasty;

  currentDynastyMarkId: string;

  constructor(private router: Router, private dynastyMarkService: RhDynastyMarkService) { }

  ngOnInit(): void {
    this.dynastyMarkService.getDynastyMarkCollection$(this.dynasty.id).subscribe(res => {
      console.log(res);
      this.currentDynastyMarkId = res[0].id;
    });
  }

  goToCurrentMark() {
    console.log(`/rhombus/dynasties/${this.dynasty.id}/mark/${this.currentDynastyMarkId}`);
    this.router.navigateByUrl(`/rhombus/dynasties/${this.dynasty.id}/mark/${this.currentDynastyMarkId}`);
  }

  goToMark() {
    console.log('goToMark');
  }

  getMark() {
    console.log('getMark');
  }

  addNewMark() {
    console.log('addNewMark');
  }

}
