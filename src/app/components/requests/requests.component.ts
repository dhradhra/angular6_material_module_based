import { Component, OnInit } from '@angular/core';
import { BatteriesService } from '../../services/batteries.service';
import swal from 'sweetalert2';
import { MatTableDataSource } from '@angular/material';

@Component({
	selector: 'app-requests',
	templateUrl: './requests.component.html',
	styleUrls: [ './requests.component.css' ]
})
export class RequestsComponent implements OnInit {
	private pending: boolean = true;
	private inRequests: Array<object> = null;
	private outRequests: Array<object> = null;
	private isLoading: boolean = true;
	private error: string = null;

	private incomingDisplayedColumns: string[] = [ 'assetType', 'serialNumber', 'comingFrom', 'action' ];

	private outgoingDisplayedColumns: string[] = [ 'assetType', 'serialNumber', 'goingTo', 'action' ];

	constructor(private batteryService: BatteriesService) {}

	ngOnInit() {
		this.getMyPendingRequests();
	}

	getMyPendingRequests() {
		this.batteryService.getPendingRequests().subscribe(
			(response) => {
				this.outRequests = response.outgoing;
				this.inRequests = response.incoming;
				this.isLoading = false;
				console.log(response)
			},
			(err) => {
				this.error = err.error;
				this.isLoading = false;
			}
		);
	} //getMyPendingRequests() ends

	requestAction(transactionID, assetSerialNumber, assetTargetID, assetType, action) {
		swal({
			title: 'Processing',
			onOpen: () => {
				swal.showLoading();
			},
			allowOutsideClick: () => !swal.isLoading()
		});
		this.batteryService
			.actionForCellRequest(transactionID, assetSerialNumber, assetTargetID, assetType, action)
			.subscribe(
				() => {
					swal('Sucess', 'Request has been processed', 'success');
					this.isLoading = true;
					this.getMyPendingRequests();
				},
				(err) => {
					swal('Sorry', "Request couldn't be processed", 'error');
					console.log(err.message);
				}
			);
	} //requestAction() ends
}
