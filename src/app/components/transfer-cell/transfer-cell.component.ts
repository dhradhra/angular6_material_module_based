import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { BatteriesService } from '../../services/batteries.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer-cell.component.html',
  styleUrls: ['./transfer-cell.component.css']
})
export class TransferCellComponent implements OnInit {

private loader = false;
private batterySerialNumber: any;
private target: any;
constructor(private batteryService: BatteriesService) { }

ngOnInit() {
}

transferCell(form){
this.loader = true;
	if(form.status !== 'INVALID'){

		// Call to API, and farward the JSON data
		this.batteryService.transferCell(this.batterySerialNumber, this.target)
		.subscribe(
			data => {
				// Showing the success message
				swal('Success', 'Transfer is Done', 'success');
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
	} 

}//TransferCell() ends

}