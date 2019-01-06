import { Component, OnInit } from '@angular/core';
import { BatteriesService } from '../../services/batteries.service';
import swal from 'sweetalert2';

@Component({
	selector: 'app-recall',
	templateUrl: './recall.component.html',
	styleUrls: [ './recall.component.css' ]
})
export class RecallComponent implements OnInit {
	private batterySerialNumber: any;

	private loader: boolean = false;
	private isFileLoading: boolean = false;

	constructor(private batteryService: BatteriesService) {}

	ngOnInit() {}

	issueRecall(form) {
		this.loader = true;
		if (form.status !== 'INVALID') {
			this.batteryService.issueRecall(this.batterySerialNumber).subscribe(
				(data) => {
					swal('Success', 'Recall has been issued', 'success');
					form.reset();
					this.loader = false;
				},
				(error) => {
					console.error(error);
					swal('Sorry', 'Recall issue unsuccessful: ' + error.error.sqlMessage, 'error');
					this.loader = false;
				}
			);
		} else {
			swal('Alert', 'A battery cell recall cannot be issued right now', 'warning');
			return false;
		}
	}
}
