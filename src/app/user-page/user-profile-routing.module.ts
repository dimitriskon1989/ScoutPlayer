import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {UserPageComponent} from "./components/user-page.component";

import { ProfileComponent } from 'src/app/user-page/components/profile/profile.component';
import { MessagesComponent } from 'src/app/user-page/components/messages/messages.component';
import { AccountComponent } from 'src/app/user-page/components/account/account.component';
import { SettingsComponent } from 'src/app/user-page/components/settings/settings.component';
import { NotfoundComponent } from "../shared/components/notfound/notfound.component";

const routes: Routes = [
  {
    path: '',
    component: UserPageComponent,
    children: [
      { path: 'profile', component: ProfileComponent },
      { path: 'messages', component: NotfoundComponent },
      { path: 'account', component: NotfoundComponent },
      { path: 'settings', component: NotfoundComponent },
      { path: '**', component: NotfoundComponent }
    ]
  },
  {
    path: '**',
    redirectTo: '/profile',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserProfileRoutingModule { }
