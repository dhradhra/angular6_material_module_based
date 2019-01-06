import { Component, OnInit } from '@angular/core';
import { BatteriesService } from '../../services/batteries.service';
import { MatTableDataSource } from '@angular/material';

@Component({
	selector: 'app-view-cells',
	templateUrl: './view-cells.component.html',
	styleUrls: [ './view-cells.component.css' ]
})
export class ViewCellsComponent implements OnInit {
	private batteryCells: Array<object> = null;
	private isLoading: boolean = true;
	private error: string = null;

	private columnName: string[] = [ 'serialNumber' ];

	constructor(private batteryService: BatteriesService) {}

	ngOnInit() {
		this.viewMyBatteryCells();
	}

	viewMyBatteryCells() {
		this.batteryService.viewMyBatteryCells().subscribe(
			(response) => {
				this.batteryCells = response;
				this.isLoading = false;
			},
			(err) => {
				this.error = err.error;
				this.isLoading = false;
			}
		);
	}
}
