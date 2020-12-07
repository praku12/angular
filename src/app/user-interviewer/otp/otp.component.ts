import { Component, OnInit } from '@angular/core';
import { NgOtpInputModule } from  'ng-otp-input';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {
  title="OTP Verification"

  constructor() { }

  ngOnInit(): void {
  }
  onOtpChange($event){
    
  }

}
