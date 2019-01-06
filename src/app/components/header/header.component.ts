import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { BatteriesService } from 'src/app/services/batteries.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  // To store the data of user
  private user: any = {};

  //for notification
  private counter = null;
  private notifications;

  private loader: boolean = true;

  constructor(
    private authservice: AuthService,
    private router: Router,
    private batteryservice: BatteriesService
  ){}

  ngOnInit() {
    this.getRecalledCells();
    this.getProfile();
    this.getProfile();
  }

  
  logout(){
    this.authservice.logout();
    this.router.navigate(['login']);
  }

  getProfile(){
  
    this.user = 'this.authservice.getTokenPayload()';
  }

  //for Recalled cells
  getRecalledCells(){
    this.batteryservice.getRecallCells()
    .subscribe(Response=>{
      console.log(Response);
      var length = Object.keys(Response).length;
      if(length>0){
        this.counter = length;
      }
      this.notifications = Response;
    })
  }

}
