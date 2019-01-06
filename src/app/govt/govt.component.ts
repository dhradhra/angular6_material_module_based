import { Component, OnInit } from '@angular/core';
import { TopSection, ToplinksService } from '../services/toplinks.service';

@Component({
  selector: 'app-govt',
  template: '<app-main></app-main>',
})
export class GovtComponent implements OnInit {

  private topNavLinks: TopSection = {
    cols: 1,
    rowHeight: "200",
    listItems: [
			{
				heading: "view",
				links: [
					{url: "view-cell-history", name: "View Cell History"}
				]
			}
    ]
  };
  constructor(private toplinkservice: ToplinksService) { 
    toplinkservice.createLinks(this.topNavLinks);
  }

  ngOnInit() {
  }

}
