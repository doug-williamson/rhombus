import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RhShellAuthService } from '../../services/auth.service';
import { RhombusShellAboutComponent } from '../shell-about/shell-about.component';
import { ShellContactComponent } from '../shell-contact/shell-contact.component';
import { RhombusShellDonateComponent } from '../shell-donate/shell-donate.component';

@Component({
  selector: 'rh-shell-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class RhombusShellAuthComponent implements OnInit {

    constructor(private dialog: MatDialog, public authService: RhShellAuthService) { }

    ngOnInit(): void {
    }

    showAbout(): void {
        const dialogRef = this.dialog.open(RhombusShellAboutComponent, {
            width: '400px',
        });

        dialogRef.afterClosed().subscribe(() => {
            // console.log('The dialog was closed');
        });
    }

    showContact(): void {
        const dialogRef = this.dialog.open(ShellContactComponent, {
            width: '400px',
        });

        dialogRef.afterClosed().subscribe(() => {
            // console.log('The dialog was closed');
        });
    }

    showDonate(): void {
        const dialogRef = this.dialog.open(RhombusShellDonateComponent, {
            width: '400px',
        });

        dialogRef.afterClosed().subscribe(() => {
        // console.log('The dialog was closed');
        });
    }
}
