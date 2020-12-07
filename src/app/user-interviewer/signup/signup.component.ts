import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  title="Welcome to DX Walk-in";

  fname="";
  lname="";
  email="";
  phone="";
  headline="";
  aboutYou="";
  constructor(public formBuilder: FormBuilder,) {
   }

  ngOnInit(): void {
  }


  onSubmit(){
    
    console.log("Form Submitted!");
    console.log(this.fname);
    console.log(this.lname);
    console.log(this.phone);
    console.log(this.headline);
    console.log(this.aboutYou);
   

    var data = {fname: this.fname,
                lname: this.lname,
                phone: this.phone,
                headline: this.headline,
                aboutYou: this.aboutYou,
                
      };
    alert(data);
    console.log(data);


}



  

}
