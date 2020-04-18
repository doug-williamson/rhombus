import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RhombusShellApplicationInfoService } from '../../services/application-info.service';

@Component({
  selector: 'rhombus-shell-contact-us',
  templateUrl: './shell-contact-us.component.html',
  styleUrls: ['./shell-contact-us.component.scss'],
})
export class ShellContactUsComponent implements OnInit {

  _appContactUsLink?: string;

  constructor(private applicationInfo: RhombusShellApplicationInfoService, private _snackBar: MatSnackBar) {
    this._appContactUsLink = this.applicationInfo.contactUsLink;
  }

  openSnackBar() {
    const message = 'Copied. Ctrl + V to paste';
    const action = undefined;

    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  ngOnInit(): void {}

}
