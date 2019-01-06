import { Component, OnInit } from '@angular/core';
import { TopSection, ToplinksService } from '../services/toplinks.service';

@Component({
  selector: 'app-dealer-repairer',
  template: '<app-main></app-main>',
})
export class DealerRepairerComponent implements OnInit {

  private topNavLinks: TopSection = {
    cols: 4,
    rowHeight: "6:4",
    listItems: [
			{
				heading: "assign",
				links: [
					{url: "module-to-array", name: "Assign Module to Array"},
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
					{url: "requests", name: "View All Pending Requests"}
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
