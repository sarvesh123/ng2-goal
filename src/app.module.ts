import { NgModule }       from '@angular/core';

import { Ng2GoalAppComponent }       from './app/ng2-goal.component';
import { routing,
         appRoutingProviders } from './app/app.routes';

@NgModule({
  imports: [
    routing
  ],
  declarations: [
    Ng2GoalAppComponent
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [ Ng2GoalAppComponent ]
})
export class AppModule {
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/