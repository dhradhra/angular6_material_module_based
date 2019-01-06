import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
	providedIn: 'root'
})
export class BatteriesService {
	private apiUrl = 'http://localhost:3000/api/';
	private companyName="";

	constructor(private http: HttpClient, private authservice: AuthService) {
		this.companyName = 'authservice.getTokenPayload().companyName';
	}

	//================================================================================
	// Methods For Cells
	// =================================================================================

	//create cell
	createCell(batterySerialNumber) {
		return this.http.post(this.apiUrl + 'create/batteryCell', {
			batterySerialNumber: batterySerialNumber,
			owner: this.companyName
		});
	}

	//Transfer cell
	transferCell(batterySerialNUmber, target) {
		return this.http.post(this.apiUrl + 'transfer/batteryCell', {
			batterySerialNumber: batterySerialNUmber,
			owner: this.companyName,
			target: target
		});
	}

	//Assign Cell to Module
	assignCell(cellID, moduleID) {
		return this.http
			.post(
				this.apiUrl + 'assign/toModule',
				{
					batterySerialNumber: cellID,
					moduleSerialNumber: moduleID,
					owner: this.companyName
				}
			)
			.pipe((response) => {
				return response;
			});
	}

	// View  All Of My Battery Cells
	viewMyBatteryCells(): any {
		return this.http
			.post(this.apiUrl + 'query/viewMyBatteryCells',
			 { 
			   owner: this.companyName 
			 }
			  )
			   .pipe((response) => {
				return response;
			});
	}

	//View  Cell History
	getHistory(batterySerialNumber) {
		return this.http
			.post(
				this.apiUrl + 'query/viewCellHistory',
				{
					batterySerialNumber: batterySerialNumber
				}
				// {responseType: 'text'}
			)
			.pipe((response) => {
				return response;
			});
	}

	// Issue Recall
	issueRecall(batterySerialNumber): any {
		return this.http
			.post(this.apiUrl + 'recall/issueRecall', {
				batterySerialNumber: batterySerialNumber
			})
			.pipe((response) => {
				return response;
			});
	}

    //this will get all the cells which are recalled
	getRecallCells(){
		return this.http
		.post(this.apiUrl + 'recall/getRecall', 
		{owner: this.companyName});
	}

	//================================================================================
	// Methods For Array
	// =================================================================================

	//add array
	createArray(arraySerialNumber, Capacity) {
		return this.http.post(this.apiUrl + 'create/batteryArray', {
			arraySerialNumber: arraySerialNumber,
			owner: this.companyName,
			capacity: Capacity
		});
	} //createArray() ends

	//Transfer Array
	transferArray(arraySerialNumber, target) {
		return this.http.post(this.apiUrl + 'transfer/batteryArray', {
			arraySerialNumber: arraySerialNumber,
			owner: this.companyName,
			target: target
		});
	}

	// Retrieve Array
	retrieveArray(arraySerialNumber){
		return this.http.post(this.apiUrl + 'assign/retrieveBatteryArray', {
			arraySerialNumber: arraySerialNumber,
			owner: this.companyName
			} );
		}	

	//================================================================================
	// Methods For Module
	// =================================================================================

	// Create New Module
	createModule(moduleSerialNumber, Capacity) {
		return this.http.post(this.apiUrl + 'create/batteryModule', {
			moduleSerialNumber: moduleSerialNumber,
			owner: this.companyName,
			capacity: Capacity
		});
	} //createModule() ends

	// Assign Module to Array
	assignModule(moduleSerialNumber, arraySerialNumber): any {
		return this.http
			.post(this.apiUrl + 'assign/toArray', {
				moduleSerialNumber: moduleSerialNumber,
				arraySerialNumber: arraySerialNumber,
				owner: this.companyName
			})
			.pipe((response) => {
				return response;
			});
	} //assignModule() ends

	// Retrieve Module
	retrieveModule(moduleSerialNumber){
	console.log(moduleSerialNumber, this.companyName);
		return this.http.post(this.apiUrl + 'assign/retrieveBatteryModule', {
			moduleSerialNumber: moduleSerialNumber,
			owner: this.companyName
			} );
		}

	// Transfer Module
	transferModule(moduleSerialNumber, target) {
		return this.http.post(this.apiUrl + 'transfer/batteryModule', {
			moduleSerialNumber: moduleSerialNumber,
			owner: this.companyName,
			target: target
		});
	}

	//Pending View services (Accept, Reject, and Cancel)
	getPendingRequests(): any {
		return this.http.post(this.apiUrl + 'query/viewPending', { owner: this.companyName }).pipe((response) => {
			return response;
		});
	} //getPendingRequests() ends

	actionForCellRequest(
		transactionID: number,
		assetSerialNumber: string,
		assetTargetID: string,
		assetType: string,
		action: string
	) {
		// Battery Cell
		if (assetType == 'batteryCell') {
			if (action == 'accept') {
				return this.http.post(this.apiUrl + 'transfer/acceptBatteryCell', {
					transactionID: transactionID,
					batterySerialNumber: assetSerialNumber
				});
			} else if (action == 'decline') {
				return this.http.post(this.apiUrl + 'transfer/declineBatteryCell', {
					transactionID: transactionID,
					batterySerialNumber: assetSerialNumber
				});
			} else if (action == 'cancel') {
				return this.http.post(this.apiUrl + 'transfer/cancelBatteryCell', {
					transactionID: transactionID,
					batterySerialNumber: assetSerialNumber
				});
			}
		}

		// Battery Module
		if (assetType == 'batteryModule') {
			if (action == 'accept') {
				return this.http.post(this.apiUrl + 'transfer/acceptBatteryModule', {
					transactionID: transactionID,
					moduleSerialNumber: assetSerialNumber,
					target: assetTargetID
				});
			} else if (action == 'decline') {
				return this.http.post(this.apiUrl + 'transfer/declineBatteryModule', {
					transactionID: transactionID,
					moduleSerialNumber: assetSerialNumber
				});
			} else if (action == 'cancel') {
				return this.http.post(this.apiUrl + 'transfer/cancelBatteryModule', {
					transactionID: transactionID,
					moduleSerialNumber: assetSerialNumber
				});
			}
		}

		// Battery Array
		if (assetType == 'batteryArray') {
			if (action == 'accept') {
				return this.http.post(this.apiUrl + 'transfer/acceptBatteryArray', {
					transactionID: transactionID,
					arraySerialNumber: assetSerialNumber,
					target: assetTargetID
				});
			} else if (action == 'decline') {
				return this.http.post(this.apiUrl + 'transfer/declineBatteryArray', {
					transactionID: transactionID,
					arraySerialNumber: assetSerialNumber
				});
			} else if (action == 'cancel') {
				return this.http.post(this.apiUrl + 'transfer/cancelBatteryArray', {
					transactionID: transactionID,
					arraySerialNumber: assetSerialNumber
				});
			}
		}
	}
}