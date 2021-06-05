import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IShellContact, RhShellContactService } from './shell-contact.service';

@Component({
  selector: 'rh-shell-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class RhShellContactComponent implements OnInit {

  _appContactUsLink?: string;
  contact: IShellContact;

  constructor(private _snackBar: MatSnackBar, private contactService: RhShellContactService) {
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
