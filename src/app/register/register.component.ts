import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	private isLoading: boolean = false;
	private errorMessage: any;
	private user: any = {};

	constructor(private authservice: AuthService, private router: Router) { }

	ngOnInit() {
	}

	registerUser(form){
		this.isLoading = true;
		if(form.status !== 'INVALID'){

			this.authservice.registerUser(this.user)
			.subscribe(
				()=> {
					swal({
						type: 'success',
						title: 'Registration Completed',
						html: 'You will be navigated to Login page',
						timer: 10000
					}).then(() => {
						this.router.navigateByUrl('/login');
					})
				},
				err => {					
					form.reset();
					this.errorMessage = err.error;
					this.isLoading = false;					
				}
			);
		
		}
		else{
			form.reset();
			this.errorMessage = "There was an error";
			this.isLoading = false;
			return false;
		
		} //if block ends
	}//method ends

}
