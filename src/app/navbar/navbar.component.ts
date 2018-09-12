import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar-comp',
  templateUrl: `./navbar.component.html`,
  styleUrls: [`./navbar.component.css`]
})

export class NavbarComponent  {
  appName = 'SIDAMA';
  datasetsLink = '/datasets';
  homeLink = '/';
  bountyLink = '/bounties';
}
