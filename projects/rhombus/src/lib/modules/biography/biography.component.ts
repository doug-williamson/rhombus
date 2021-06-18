import { Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { IBiography } from './biography';
import { BiographyService } from './biography.service';

@Component({
  selector: 'app-biography',
  templateUrl: './biography.component.html',
  styleUrls: ['./biography.component.scss']
})
export class BiographyComponent implements OnInit {

  biography: IBiography[];

  constructor(public media: MediaObserver, private biographyService: BiographyService) {}

  ngOnInit() {
    this.biographyService.getBiography$().subscribe(res => {
      this.biography = res;
    });
  }

}
