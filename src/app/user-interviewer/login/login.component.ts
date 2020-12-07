import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  text="Login to DX Walk-in";
  emailpattern="[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}";
  passwordpattern="^[a-zA-Z0-9]{8}$";



  email="";
  password="";
 

  constructor() {
    
   }

  ngOnInit(): void {
  }

  onSubmit(){
    
      console.log("Form Submitted!");
      console.log(this.email);
      console.log(this.password);

      var data = {Email: this.email, password: this.password};
      alert(data);
      console.log(data);

  
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



}
