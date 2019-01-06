import { Component, OnInit } from '@angular/core';
import { BatteriesService } from '../../services/batteries.service';
import swal from 'sweetalert2';

@Component({
	selector: 'app-add-array',
	templateUrl: './add-array.component.html',
	styleUrls: ['./add-array.component.css']
})
export class AddArrayComponent implements OnInit {

	// to store the form data
	  private arraySerialNumber: any;
	  private capacity: any;
	  
	// to show the loader while processing form submission
	private loader: boolean = false;
	private isFileLoading: boolean = false;

	constructor(private batteryService: BatteriesService) { }

	ngOnInit() {
	}

	addNewArray(form){

		// to show the loader
		this.loader = true;
		if(form.status !== 'INVALID'){

			// Call to API, and farward the JSON data
			this.batteryService.createArray(this.arraySerialNumber, this.capacity)
			.subscribe(
				data => {
					// Showing the success message
					swal('Success', 'Array has been created', 'success');
					this.loader = false;

				},
				error => {

					// Showing the failure message
					console.log(error);
					
					swal('Sorry', `${error.error}`, 'error');
					this.loader = false;

				}
			);
			
			// Rest the form after submitting
			form.reset();

		}else{
			console.log("Invalid");
			return false;
			
		} //if block ends
	} //addNewArray() ends

}
