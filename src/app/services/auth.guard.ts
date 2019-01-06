import { Injectable } from '@angular/core';
import { CanLoad, Route, Router } from '@angular/router';
import { Observable, TimeoutError } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

	constructor(private myRoute: Router, private auth: AuthService){}
	  
 

  canLoad(route: Route): boolean {    

		if (this.auth.isLoggedIn()) {
      console.log('point 1')

			// Retreive the role
      const expectedRole = this.auth.getTokenPayload().userGroup;
      const currentRole = route.data.role;
			
			// Check whether the roles are matched
			if(expectedRole !== currentRole){

				// If not, navigate to login page
				this.myRoute.navigate(["login"]);
				return false; 
			}
			return true;
		} else{
			// If User is not logged in, hence no token found
			// in localstorage
      // Naviage to login page      
        	this.myRoute.navigate(["login"]);
        	return false;
		}
		
	}
}
