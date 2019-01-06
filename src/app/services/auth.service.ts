import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	private apiUrl = 'http://localhost:3000';

	constructor(private http: HttpClient, private jwtHelper: JwtHelperService) {}

	// Method for handling login process
	login(email: string, password: string) {
		return this.http.post<any>(this.apiUrl + '/auth/employeeLogin', { email, password }).pipe(
			map((response) => {
				if (response && response[1].Token) {
					// Store Token in localstorage of browser
					localStorage.setItem('currentUser', response[1].Token);

					// Retreive current user type
					// And return to the to calling method in
					// login.component.ts
					const payload = this.getTokenPayload();
					return payload.userGroup;
				}

				return response;
			})
		);
	} //login ends

	logout() {
		// remove user token from local storage to log user out
		localStorage.removeItem('currentUser');
	}

	isLoggedIn() {
		// Retreive the token from local storage of browser
		const token = localStorage.getItem('currentUser');

		// Check whether the token is expired and return
		// true or false
		return !this.jwtHelper.isTokenExpired(token);
	}

	//register users method
	registerUser(userData: any) {
		return true
			// .post(this.apiUrl + '/auth/registerNewEmployee', {
			// 	companyName: userData.companyName,
			// 	password: userData.password,
			// 	email: userData.email,
			// 	firstName: userData.firstName,
			// 	lastName: userData.lastName,
			// 	employeeID: userData.employeeID
			// })
			// .pipe(
			// 	map((response) => {
			// 		return response;
			// 	})
			// );
	}

	getTokenPayload() {
		const token = localStorage.getItem('currentUser');
		return this.jwtHelper.decodeToken(token);
	}
}
