import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent implements OnInit {

  constructor(private router: Router, private fb: UntypedFormBuilder, private userService: UserService) {
  }
  ngOnInit(): void {

  }
  onOtpChange(value: any) {
    console.log(value)
    this.userService.checkOtp(value).subscribe(res => {
      this.router.navigateByUrl("/admin/dashboard");
    }, error => {

    })

  }

  otpSubmit() {
    this.router.navigateByUrl("/admin/dashboard");
  }
}