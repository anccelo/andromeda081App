import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {Page404Component} from './page-404.component';


// routes
const appRoutes: Routes = [
  {path: '', redirectTo: 'planets', pathMatch: 'full'},
  {path: '**', component: Page404Component}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
