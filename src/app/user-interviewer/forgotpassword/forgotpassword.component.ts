import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  text="Forgot Password";
  email="";

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("Form Submitted!");
      console.log(this.email);

      var data = {Email: this.email};
      alert(data);
      console.log(data);
  }

}
