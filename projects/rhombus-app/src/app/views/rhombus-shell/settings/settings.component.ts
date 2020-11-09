import { Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'rhombus-app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  subtitle = '<rh-shell-settings>';
  
  constructor(public media: MediaObserver) { }

  ngOnInit(): void {
  }

}
