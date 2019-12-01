import { Component, OnInit, Input } from '@angular/core';
import { RhombusShellNavService } from '../../services/nav.service';
import { MatDialog } from '@angular/material';
import { RhombusShellAboutComponent } from '../shell-about/shell-about.component';

@Component({
  selector: 'rhombus-shell-header',
  templateUrl: './shell-header.component.html',
  styleUrls: ['./shell-header.component.scss']
})
export class RhombusShellHeaderComponent implements OnInit {

  @Input()
  title: string;
  
  constructor(
    private navService: RhombusShellNavService,
    private dialog: MatDialog) { }

  ngOnInit() {
  }

  toggleNav() {
    this.navService.toggle();
  }

  showAbout(): void {
    const dialogRef = this.dialog.open(RhombusShellAboutComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
