import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule', canActivate: [AuthGuard] },
  { path: 'welcome', loadChildren: './welcome/welcome.module#WelcomePageModule' },
  { path: 'terms', loadChildren: './terms/terms.module#TermsPageModule' },
  { path: 'phone', loadChildren: './phone/phone.module#PhonePageModule' },
  { path: 'already', loadChildren: './already/already.module#AlreadyPageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
