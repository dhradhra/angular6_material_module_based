import { Component, OnInit } from '@angular/core';
import { BatteriesService } from '../../services/batteries.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-retrieve-array',
  templateUrl: './retrieve-array.component.html',
  styleUrls: ['./retrieve-array.component.css']
})
export class RetrieveArrayComponent implements OnInit {

 
  private loader = false;
  private arraySerialNumber: any;
  constructor(private batteryService: BatteriesService) { }
  
  ngOnInit() {
  }
  
  retrieveArray(form){
  this.loader = true;
    if(form.status !== 'INVALID'){
  
      // Call to API, and farward the JSON data
      this.batteryService.retrieveArray(this.arraySerialNumber)
      .subscribe(
        data => {
          // Showing the success message
          swal('Success', 'Array has been retrieved', 'success');
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