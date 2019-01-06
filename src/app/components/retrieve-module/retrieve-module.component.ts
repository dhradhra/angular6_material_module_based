import { Component, OnInit } from '@angular/core';
import { BatteriesService } from '../../services/batteries.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-retrieve-module',
  templateUrl: './retrieve-module.component.html',
  styleUrls: ['./retrieve-module.component.css']
})
export class RetrieveModuleComponent implements OnInit {

 
  private loader = false;
  private moduleSerialNumber: any;
  constructor(private batteryService: BatteriesService) { }
  
  ngOnInit() {
  }
  
  retrieveModule(form){
  this.loader = true;
    if(form.status !== 'INVALID'){
  
      // Call to API, and farward the JSON data
      this.batteryService.retrieveModule(this.moduleSerialNumber)
      .subscribe(
        data => {
          // Showing the success message
          swal('Success', 'Module has been retrieved', 'success');
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