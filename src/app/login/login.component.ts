import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, AuthenticationService } from '../_services/index';

@Component({
    templateUrl: 'login.component.html',
    selector: 'app-login-comp',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit, OnDestroy {
    model: any = {};
    loading = false;
    returnUrl: string;
    @Input() display: boolean;
    @Output() displayChange = new EventEmitter();

    onClose() {
      this.displayChange.emit(false);
    }

    // Work against memory leak if component is destroyed
    ngOnDestroy() {
      this.displayChange.unsubscribe();
    }

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) { }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    console.log(error);
                    this.alertService.error(error.error.message);
                    this.loading = false;
                });
    }
}
