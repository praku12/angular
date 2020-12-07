import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group-discussion-home',
  templateUrl: './group-discussion-home.component.html',
  styleUrls: ['./group-discussion-home.component.css']
})
export class GroupDiscussionHomeComponent implements OnInit {
  name = "";
  email="";
  aa:boolean=false;


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

  setIndex(ii){
    this.aa=ii;
    console.log
  }

  constructor() { }

  ngOnInit(): void {
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

}
