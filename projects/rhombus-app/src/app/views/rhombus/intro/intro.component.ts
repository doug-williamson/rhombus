import { Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'rhombus-app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  constructor(public media: MediaObserver) { }

  ngOnInit(): void {
  }

  goToLink(url: string) {
    window.open(url, '_blank');
  }

}
