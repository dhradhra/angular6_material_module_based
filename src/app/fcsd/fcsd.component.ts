import { Component, OnInit } from '@angular/core';
import { TopSection, ToplinksService } from '../services/toplinks.service';

@Component({
  selector: 'app-fcsd',
  template: '<app-main></app-main>',
})
export class FcsdComponent implements OnInit {

  private topNavLinks: TopSection = {
    cols: 2,
    rowHeight: "160",
    listItems: [
			{
				heading: "recall",
				links: [
					{url: "recall", name: "Issue Recall"}
				]
			},
			{
				heading: "view",
				links: [
					{url: "view-cell-history", name: "View Cell History"}
				]
			},
    ]
  };
  constructor(private toplinkservice: ToplinksService) { 
    toplinkservice.createLinks(this.topNavLinks);
  }

  ngOnInit() {
  }

}
