import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { BatteriesService } from '../../services/batteries.service';

@Component({
  selector: 'app-cell2module',
  templateUrl: './cell2module.component.html',
  styleUrls: ['./cell2module.component.css']
})
export class Cell2moduleComponent implements OnInit {

  private loader = false;
  private batterySerialNumber: any;
  private moduleSerialNumber: any;
	constructor(private batteryService: BatteriesService) { }

	ngOnInit() {
	}

	assignCell(form){
    this.loader = true;
		if(form.status !== 'INVALID'){

			// Call to API, and farward the JSON data
			this.batteryService.assignCell(this.batterySerialNumber, this.moduleSerialNumber)
			.subscribe(
				() => {
					// Showing the success message					
					swal('Success', 'Battery cell has been assign', 'success');
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
	
	}//TransferCell() ends

}
