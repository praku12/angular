import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createpassword',
  templateUrl: './createpassword.component.html',
  styleUrls: ['./createpassword.component.css']
})
export class CreatepasswordComponent implements OnInit {
  title="Create your password";
  password="";
  confirmpassword="";

  constructor() { }

  ngOnInit(): void {
  }
  // passwordShow(){
  //   var temp = document.getElementById("password"); 
  //           if (temp.type === "password") { 
  //               temp.type = "text"; 
  //           } 
  //           else { 
  //               temp.type = "password"; 
  //           } 
  // }
  onSubmit(){
    
    console.log("Form Submitted!");
    console.log(this.password);
    console.log(this.confirmpassword);

    var data = {password: this.password, confirmpassword: this.confirmpassword};
    alert(data);
    console.log(data);


}

}
