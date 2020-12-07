import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  fname="Prakash";
  lname="Nandhan";
  email="prakashpraku111@gmail.com";
  phone="9880455020";
  headline="Software Developer";
  aboutYou="Software Engineer";

   url: string | ArrayBuffer 
  constructor() { }
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
                url:this.url,
      };
    alert(data);
    console.log(data);


}

onSelectFile(event) {
  if (event.target.files && event.target.files[0]) {
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
     // read file as data url
    reader.onload = (event) => { 
      
      // called once readAsDataURL is completed
      this.url = event.target.result;
    }
  }
}
public delete(){
  this.url = null;
}




}
