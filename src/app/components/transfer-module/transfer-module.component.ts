import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { BatteriesService } from '../../services/batteries.service';

@Component({
  selector: 'app-transfer-module',
  templateUrl: './transfer-module.component.html',
  styleUrls: ['./transfer-module.component.css']
})
export class TransferModuleComponent implements OnInit {

  private loader = false;
  private moduleSerialNumber: any;
  private target: any;
  constructor(private batteryService: BatteriesService) { }
  
  ngOnInit() {
  }
  
  transferModule(form){
  this.loader = true;
    if(form.status !== 'INVALID'){
  
      // Call to API, and farward the JSON data
      this.batteryService.transferModule(this.moduleSerialNumber, this.target)
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