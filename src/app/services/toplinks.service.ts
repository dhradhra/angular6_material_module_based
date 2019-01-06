import { Injectable } from '@angular/core';

export interface TopSection {
  cols: number,
  rowHeight: string,
  listItems: any

}

@Injectable({
  providedIn: 'root'
})


export class ToplinksService {

  private topNav: TopSection;

  constructor() { }

  createLinks(navObject: TopSection): void{
    this.topNav = navObject;    
  }

  getLinks(): TopSection{
    return this.topNav;
  }
}
