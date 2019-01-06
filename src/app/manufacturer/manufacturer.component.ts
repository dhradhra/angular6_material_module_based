import { Component, OnInit } from '@angular/core';
import { TopSection, ToplinksService } from '../services/toplinks.service';

@Component({
  selector: 'app-manufacturer',
  template: '<app-main></app-main>',
})
export class ManufacturerComponent implements OnInit {
  private topNavLinks: TopSection = {
    cols: 5,
    rowHeight: "4:3.5",
    listItems: [
			{
				heading: "create",
				links: [
          {url: "add-module", name: "Create Module"},
					{url: "add-array", name: "Create Array"}
				]
			},
			{
				heading: "assign",
				links: [
					{url: "cell-to-module", name: "Assign Cell to Module"},
					{url: "module-to-array", name: "Assign Module to Array"}
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
				heading: "retrieve",
				links: [
					{url: "retrieve-module", name: "Retrieve Module"},
					{url: "retrieve-array", name: "Retrieve Array"}
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
