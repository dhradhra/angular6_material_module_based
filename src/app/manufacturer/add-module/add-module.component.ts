import { Component, OnInit } from '@angular/core';
import { BatteriesService } from '../../services/batteries.service';
import swal from 'sweetalert2';

@Component({
	selector: 'app-add-module',
	templateUrl: './add-module.component.html',
	styleUrls: ['./add-module.component.css']
})
export class AddModuleComponent implements OnInit {

	// to store the form data
	private moduleSerialNumber: any;
	private capacity: any;

	// to show the loader while processing form submission
	private loader: boolean = false;
	private isFileLoading: boolean = false;

	constructor(private batteryService: BatteriesService) { }

	ngOnInit() {
	}

	addNewModule(form){

		// to show the loader
		this.loader = true;
		if(form.status !== 'INVALID'){

			// Call to API, and farward the JSON data
			this.batteryService.createModule(this.moduleSerialNumber, this.capacity)
			.subscribe(
				data => {
					// Showing the success message
					swal('Success', 'Module has been created', 'success');
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
	} //addNewModule() ends

}
