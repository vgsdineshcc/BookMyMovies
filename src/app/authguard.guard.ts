import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
constructor(private loginService: LoginService, private router: Router){}

  canActivate()
    {
      
      if(this.loginService.isAuthenticated())
      {
      return true;
    }
      else
    {
      this.router.navigate(['/login']);
      return true;
      
    }
    }
    
  
  
}
