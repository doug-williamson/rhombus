import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AuthenticationService } from '../../authentication/authentication.service';
import { RhombusShellNavService } from '../../services/nav.service';
import { RhombusShellAboutComponent } from '../shell-about/shell-about.component';
import { RhombusShellDonateComponent } from '../shell-donate/shell-donate.component';

@Component({
  selector: 'rhombus-shell-header',
  templateUrl: './shell-header.component.html',
  styleUrls: ['./shell-header.component.scss'],
})
export class RhombusShellHeaderComponent implements OnInit {

  @Input()
  title: string;

  constructor(
    private navService: RhombusShellNavService,
    private dialog: MatDialog,
    public auth: AuthenticationService) { }

  ngOnInit() {

  }

  toggleNav() {
    this.navService.toggle();
  }

  showAbout(): void {
    const dialogRef = this.dialog.open(RhombusShellAboutComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(() => {
      // console.log('The dialog was closed');
    });
  }

  showDonate(): void {
    console.log('Doug');
    const dialogRef = this.dialog.open(RhombusShellDonateComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(() => {
      // console.log('The dialog was closed');
    });
  }

  signOut() {
    this.auth.signOut();
  }
}
