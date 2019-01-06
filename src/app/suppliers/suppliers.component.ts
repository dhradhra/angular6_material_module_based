import { Component, OnInit } from '@angular/core';
import { TopSection, ToplinksService } from '../services/toplinks.service';

@Component({
  selector: 'app-suppliers',
  template: '<app-main></app-main>'
})
export class SuppliersComponent implements OnInit {
  private topNavLinks: TopSection = {
    cols: 3,
    rowHeight: "2:1",
    listItems: [
			{
				heading: "create",
				links: [
          {url: "add-cell", name: "Create Battery Cell"}
				]
			},
			{
				heading: "transfer",
				links: [
					{url: "transfer-cell", name: "Transfer Battery Cell"},
					{url: "transfer-module", name: "Transfer Battery Module"},
					{url: "transfer-array", name: "Transfer Battery Array"}
				]
      },
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
