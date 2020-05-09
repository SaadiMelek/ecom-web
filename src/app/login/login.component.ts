import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { CaddyService } from '../services/caddy.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthenticationService,
    private router:Router,
    private caddyService:CaddyService) { }

ngOnInit() {
}

onLogin(user){
this.authService.login(user.username,user.password);
if(this.authService.isAuthenticated()){
this.caddyService.loadCaddyFromLocalStorage();
this.router.navigateByUrl('');
}

}

}