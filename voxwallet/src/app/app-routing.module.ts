import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule', canActivate: [AuthGuard] },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule', canActivate: [AuthGuard] },
  { path: 'welcome', loadChildren: './welcome/welcome.module#WelcomePageModule' },
  { path: 'phone', loadChildren: './phone/phone.module#PhonePageModule' },
  { path: 'email', loadChildren: './email/email.module#EmailPageModule' },
  { path: 'terms', loadChildren: './terms/terms.module#TermsPageModule' },
  { path: 'already', loadChildren: './already/already.module#AlreadyPageModule' },
  { path: 'seed', loadChildren: './seed/seed.module#SeedPageModule' },
  { path: 'confirm', loadChildren: './confirm/confirm.module#ConfirmPageModule' },
  { path: 'details', loadChildren: './details/details.module#DetailsPageModule' },
  { path: 'code', loadChildren: './code/code.module#CodePageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
