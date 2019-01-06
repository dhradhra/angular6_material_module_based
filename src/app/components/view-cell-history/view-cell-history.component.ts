import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { BatteriesService } from '../../services/batteries.service';

@Component({
  selector: 'app-view-cell-history',
  templateUrl: './view-cell-history.component.html',
  styleUrls: ['./view-cell-history.component.css']
})
export class ViewCellHistoryComponent implements OnInit {
  
  private loader = false;
  private batterySerialNumber: any;
  public list: any;


  private owner: string[] = ['owner', 'Transactionmessage', 'Date'];

  private incomingDisplayedColumns: string[] = []
 
  constructor(private batteryService: BatteriesService) {
    // Initialize the columns to be displayed data
    this.incomingDisplayedColumns = this.owner
  }
  ngOnInit() {
  }

  // Function to get history of cell
  seeHistory(form) {
    this.loader = true;
    if (form.status !== 'INVALID') {

      // Call to API, and farward the JSON data.
      this.batteryService.getHistory(this.batterySerialNumber)
        .subscribe(
          (data) => {
            // lst to show history of cells.
            this.list = data;
            this.loader = false;

          },
          error => {
            // Showing the failure message
            //console.log(error);
            swal('Sorry', `${error.error}`, 'error');
            this.loader = false;
          });

    } else {
      console.log("Invalid");
      return false;
    } 
  }//TransferCell() ends

}
