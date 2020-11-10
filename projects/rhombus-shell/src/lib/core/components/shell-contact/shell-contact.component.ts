import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RhombusShellApplicationInfoService } from '../../services/application-info.service';
import { IShellContact, ShellContactService } from './shell-contact.service';

@Component({
  selector: 'rh-shell-contact',
  templateUrl: './shell-contact.component.html',
  styleUrls: ['./shell-contact.component.scss'],
})
export class ShellContactComponent implements OnInit {

  _appContactUsLink?: string;
  contact: IShellContact;

  constructor(private _snackBar: MatSnackBar, private contactService: ShellContactService) {
  }

  openSnackBar() {
    const message = 'Copied. Ctrl + V to paste';
    const action = undefined;

    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  ngOnInit() {
    this.contactService.getContact$().subscribe(res => {
      this.contact = res[0];
    });
  }

  goToLink(url: string) {
    window.open(url, '_blank');
  }

}
