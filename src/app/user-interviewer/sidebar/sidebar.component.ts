import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'sidebar1',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public sidebarMinimized = false;
  // public navItems = navItems;


  constructor() { }

  ngOnInit(): void {
  }
  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

}
