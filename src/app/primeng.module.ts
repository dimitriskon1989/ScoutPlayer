import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// PrimeNg
import { PasswordModule } from 'primeng/password';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    PasswordModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    ToggleButtonModule,
    CardModule,
  ]
})
export class PrimengModule { }
