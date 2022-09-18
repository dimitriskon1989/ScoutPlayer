import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  isExpanded: boolean = false;

  constructor(private authService: AuthService,
              private router: Router,) { }

  ngOnInit(): void {
  }

  logout() {
    this.authService.signOut();
    this.router.navigate(['login']);
  }

}
