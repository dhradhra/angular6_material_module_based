import { Component, OnInit } from '@angular/core';
import { ToplinksService, TopSection } from '../../services/toplinks.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})

export class TopnavComponent implements OnInit {
  breakpoint : number;
  private topLinksSection: TopSection;
  public totalDropdowns : number;
  public totalLinks  : number;
  constructor(private toplinkservice: ToplinksService,private router:Router) {
    this.topLinksSection = toplinkservice.getLinks();   
    this.topLinksSection = {cols:3,
      rowHeight:'3',
      listItems:[{link:'a'}]}   
    this.breakpoint =  this.topLinksSection.cols;
    this.totalDropdowns = this.breakpoint
    if(this.totalDropdowns == 1){
      this.totalLinks = this.topLinksSection.listItems[0].links.length;
      this.router.navigateByUrl(this.router.url+'/'+this.topLinksSection.listItems[0].links[0].url);
    }
  }

  ngOnInit() {
    this.breakpoint = this.breakpoint;
    this.breakpoint = (window.innerWidth <= 1185) ? 3 : this.totalDropdowns;
    this.breakpoint = (window.innerWidth <= 970) ? 2 : this.breakpoint;
    this.breakpoint = (window.innerWidth <= 735) ? 1 : this.breakpoint;
    // this.breakpoint = (window.innerWidth <= 520) ? 1 : this.breakpoint;
  }
  onResize(event) {
    console.log(event.target.innerWidth)
    this.breakpoint = (window.innerWidth <= 1185) ? 3 :this.totalDropdowns;
    this.breakpoint = (window.innerWidth <= 970) ? 2 : this.breakpoint;
    this.breakpoint = (window.innerWidth <= 735) ? 1 : this.breakpoint;
  }

}
