import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from "src/app/material.module";
import  {PrimengModule } from "src/app/primeng.module";

// Routing Module
import { UserProfileRoutingModule } from './user-profile-routing.module';

// Components
import { ProfileComponent } from 'src/app/user-page/components/profile/profile.component';
import { MessagesComponent } from 'src/app/user-page/components/messages/messages.component';
import { AccountComponent } from 'src/app/user-page/components/account/account.component';
import { SettingsComponent } from 'src/app/user-page/components/settings/settings.component';
import { UserPageComponent } from 'src/app/user-page/components/user-page.component';

@NgModule({
  declarations: [
    ProfileComponent,
    MessagesComponent,
    AccountComponent,
    SettingsComponent,
    UserPageComponent
  ],
  imports: [
    CommonModule,
    UserProfileRoutingModule,
    MaterialModule,
    PrimengModule
  ]
})
export class UserProfileModule { }
