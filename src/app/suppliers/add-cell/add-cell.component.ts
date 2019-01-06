import { Component, OnInit } from '@angular/core';
import { BatteriesService } from '../../services/batteries.service';
import swal from 'sweetalert2';

@Component({
	selector: 'app-add-cell',
	templateUrl: './add-cell.component.html',
	styleUrls: ['./add-cell.component.css']
})
export class AddCellComponent implements OnInit {

	// to store the form data
	private batterySerialNumber: any;

	// to show the loader while processing form submission
	private loader: boolean = false;
	private isFileLoading: boolean = false;

	constructor(private batteryService: BatteriesService) { }

	ngOnInit() {
	}

	addNewCell(form){

		// to show the loader
		this.loader = true;
		if(form.status !== 'INVALID'){

			// Call to API, and farward the JSON data
			this.batteryService.createCell(this.batterySerialNumber)
			.subscribe(
				data => {
					// Showing the success message
					swal('Success', 'Cell has been added', 'success');
					// Rest the form after submitting
					form.reset();
					this.loader = false;

				},

					error => {

						// Showing the failure message
						console.log(error);
						
						swal('Sorry', `${error.error}`, 'error');
						this.loader = false;
	
					}
					
					// Showing the failure message
					// swal('Sorry', 'There was an error while adding the Cell', 'error');
					// this.loader = false;
			);

		}else{
			console.log("Invalid");
			swal('Alert', "You can't add it right now", 'warning');
			return false;
			
		} //if block ends
	} //addNewCell() ends

}
