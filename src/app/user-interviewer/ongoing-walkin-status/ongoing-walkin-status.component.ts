import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ongoing-walkin-status',
  templateUrl: './ongoing-walkin-status.component.html',
  styleUrls: ['./ongoing-walkin-status.component.css']
})
export class OngoingWalkinStatusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name = "";
  email="";
  aa:boolean=false;
  resume="";
  headline="";
  status="";
  htmlSelect="";
  theWallImageUrl='assets/img/select.png'

  candidates=[{
    name:'prakash',
    email:'abc@gmail.com'
  },{
    name:'manoj',
    email:'xyz@hotmail.com'
  },{
    name:'kiran',
    email:'jsgsbh@kk.com'
  },{
    name:'ravi',
    email:'test@gmail.com'
  }]

  candidateStatus=[{
    status:"Selected",
    symbol:"assets/img/select.png",
    color:"green"
    
  },
  {
    status:"Rejected",
    symbol:"assets/img/reject.png",
    color:"red"
  },
  {
    status:"Hold",
    symbol:"assets/img/hold.png",
    color:"blue"
  }]

  MoveTo=[{
    status:"HR Round"  
  },
  {
    status:"Technical Round1" 
  },
  {
    status:"Technical Round2"
  }]

  setIndex(ii){
    this.aa=ii;
    console.log
  }



print(): void {
    // alert("hi");
const printContent = document.getElementById("print-section");
const WindowPrt = window.open('', '', 'left=0,top=0,width=900,height=900,toolbar=0,scrollbars=0,status=0');
WindowPrt.document.write(printContent.innerHTML);
WindowPrt.document.close();
WindowPrt.focus();
WindowPrt.print();
WindowPrt.close();
}

color(event){
  alert(event);
}

setColor(value,i)
{
  
  if(value=="Selected")
  {
    (document.querySelector('#green_'+i) as HTMLElement).style.color = 'springgreen';
    
  }
  if(value=="Rejected")
  {
    (document.querySelector('#green_'+i) as HTMLElement).style.color = 'red';
  }
  if(value=="Hold")
  {
    (document.querySelector('#green_'+i) as HTMLElement).style.color = 'blue';
  }

  
  
}

}
