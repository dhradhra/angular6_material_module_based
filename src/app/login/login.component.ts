//Dependancies
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';


/*selector - select and identifies directive in template and tiggers it 
TemplateUrl - url of a template file for component
styleUrl - contain on or more URLs for stylesheet
*/
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
// Class declaration for the component
export class LoginComponent implements OnInit {

	private login: any = {};
	private errorMessage: string;

	// to show the loader while processing form submission
	public isLoading: boolean = false;
	constructor(private authservice: AuthService, private router: Router) {
		/* This code will navigate the user to their respective
		* dashbaord if user is already login and the token exists*/

		if (authservice.isLoggedIn()) {
			const payload = authservice.getTokenPayload();
			router.navigateByUrl(payload.role);
		} 
		
	 }

	ngOnInit() {
	}
  	hi(){
	  }
  	validateLogin(form){
		//Remove error if previously occured
		this.errorMessage = 'null';
		
		// Make the spinner visible
		this.isLoading = true;
		if(form.status !== 'INVALID'){

			this.authservice.login(this.login.email, this.login.password)
			.subscribe(
				(data)=> {					
					this.router.navigateByUrl(data);
				},
				err => {
					console.log('Error');
					console.log(err.error);
					
					form.reset();
					this.errorMessage = err.error;
					this.isLoading = false;
				}
			);
		
		}else{
			form.reset();
			this.errorMessage = "There was an error";
			this.isLoading = false;
			return false;
		
		} //if block ends
	} //method ends
	  
	
		
	}
