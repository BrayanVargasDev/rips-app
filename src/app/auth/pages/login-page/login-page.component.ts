import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TopBarComponent } from '../../../shared/components/top-bar/top-bar.component';

@Component({
  selector: 'auth-login-page',
  standalone: true,
  imports: [
    CommonModule,
    TopBarComponent
  ],
  templateUrl: './login-page.component.html',
})
export default class LoginPageComponent { }
