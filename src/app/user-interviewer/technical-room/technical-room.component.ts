import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technical-room',
  templateUrl: './technical-room.component.html',
  styleUrls: ['./technical-room.component.css']
})
export class TechnicalRoomComponent implements OnInit {
  showModal : boolean;
  showSelect: boolean;
  showModal1:boolean;
  showModal2:boolean;

  constructor() { }

  ngOnInit(): void {
  }

    
  onClick(event)
  {
  
    this.showModal = true;
    if(event=="select")
    {
      this.showSelect=true;
    }
     // Show-Hide Modal Check
     
  }
  //Bootstrap Modal Close event
  hide()
  {
    this.showModal = false;
  }


  onhold(event){

    this.showModal1 = true;

  }
  hide1()
  {
    this.showModal1 = false;
  }


  
  onreject(event){

    this.showModal2 = true;

  }
  hide2()
  {
    this.showModal2 = false;
  }

  


}
