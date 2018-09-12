import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './home/index';
import {RegisterComponent} from './register/index';
import {AuthGuard} from './_guards/index';
import {LandingComponent} from './landing/index';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'landing', component: LandingComponent },
    { path: 'register', component: RegisterComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
