import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/authentication/login/login.component';
import { RegisterComponent } from 'src/app/authentication/register/register.component';
import { PricingComponent } from 'src/app/components/pricing/pricing.component';
import { LandingComponent } from 'src/app/components/landing/landing.component';
import {NotfoundComponent} from "./shared/components/notfound/notfound.component";

import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'user-page', loadChildren: () => import('./user-page/user-profile.module').then(m => m.UserProfileModule)},
  {path: '**', component: NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
