import {Component, Input} from '@angular/core';
import {AuthenticationService} from '../_services';

@Component({
  selector: 'app-navbar-comp',
  templateUrl: `./navbar.component.html`,
  styleUrls: [`./navbar.component.css`]
})

export class NavbarComponent  {
  appName = 'SIDAMA';
  datasetsLink = '/datasets';
  homeLink = '/';
  display = false;
  @Input() isLoggedIn: boolean;

  constructor(
    private authenticationService: AuthenticationService) { }

  openLoginPopup() {
    this.display = true;
  }

  onDialogClose(event) {
    this.display = event;
  }

  logout() {
    this.authenticationService.logout();
  }
}
