import { Component, OnInit } from '@angular/core';
import { RhAuthService } from '../../../services/auth.service';

@Component({
  selector: 'rh-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class RhLoginComponent implements OnInit {

  constructor(private authService: RhAuthService) { }

  ngOnInit(): void {
  }

  login(): void {
    this.authService.login();
  }

  anonymousLogin(): void {
      this.authService.anonymousLogin();
  }

}
