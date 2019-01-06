import { Component, OnInit } from '@angular/core';
import { TopSection, ToplinksService } from '../services/toplinks.service';

@Component({
  selector: 'app-recycler',
  template: '<app-main></app-main>',
})
export class RecyclerComponent implements OnInit {

  private topNavLinks: TopSection = {
    cols: 1,
    rowHeight: "250",
    listItems: [
			{
				heading: "view",
				links: [
					{url: "view-cells", name: "View All Battery Cells"},
          {url: "requests", name: "View All Pending Requests"},
          {url: "view-cell-history", name: "View Cells History"}
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