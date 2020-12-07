import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header1',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  name="Prakash Nandhan";
  constructor() { }

  ngOnInit(): void {
  }

}
