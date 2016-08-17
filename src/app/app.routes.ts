import { Routes, RouterModule } from '@angular/router';

import { SignupComponent } from './signup/signup.component';

const appRoutes: Routes = [
    { path: 'signup', component: SignupComponent }
];

export const appRoutingProviders: any[] = [
];

export const routing = RouterModule.forRoot(appRoutes);