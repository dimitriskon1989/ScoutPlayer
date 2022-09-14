import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  email: string = 'Giannis'

  constructor(private authservice: AuthService,
              private afAuth: AngularFireAuth,
              private router: Router,) { }

  ngOnInit(): void {
  }



  // Sign Out Function
  logout(){
    this.authservice.signOut();
    this.router.navigate(['login']);
    // this.afAuth.signOut().then(() => this.router.navigate(['login']));
  }

}
