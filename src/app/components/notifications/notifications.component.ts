import { Component, OnInit } from '@angular/core';
import { BatteriesService } from 'src/app/services/batteries.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  displayedColumns: string[] = ['serial', 'owner'];
 // dataSource = ELEMENT_DATA;

  private notifications;

  constructor(private batteryservice: BatteriesService) { }

  ngOnInit() {
    this.getRecalledCells();
  }

  getRecalledCells(){
    this.batteryservice.getRecallCells()
    .subscribe(response =>{
      this.notifications = response;   
      
    });
  }

}
