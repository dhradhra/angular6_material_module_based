import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { BatteriesService } from '../../services/batteries.service';

@Component({
  selector: 'app-module2array',
  templateUrl: './module2array.component.html',
  styleUrls: ['./module2array.component.css']
})
export class Module2arrayComponent implements OnInit {

  private loader = false;
  private moduleSerialNumber: any;
  private arraySerialNumber: any;
	constructor(private batteryService: BatteriesService) { }

	ngOnInit() {
	}

	assignModule(form){
    this.loader = true;
		if(form.status !== 'INVALID'){

			// Call to API, and farward the JSON data
			this.batteryService.assignModule(this.moduleSerialNumber, this.arraySerialNumber)
			.subscribe(
				() => {
					// Showing the success message
					swal('Success', 'Module has been assigned', 'success');
					this.loader = false;

				},
				error => {

					// Showing the failure message
					swal('Sorry', `${error.error}`, 'error');
					this.loader = false;

				}
			);
			
			// Rest the form after submitting
			form.reset();

		}			
	
	}

}
