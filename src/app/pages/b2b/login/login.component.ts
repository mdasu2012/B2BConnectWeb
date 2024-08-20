import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAccount } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  focus;
  focus1;

  loginForm: UntypedFormGroup;
  user: UserAccount;
  showOtp:boolean=true;
  constructor(private router: Router, private fb: UntypedFormBuilder, private userService: UserService) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      mobile: ['', Validators.required],
      otp: [''],

    })
  }

  ngOnInit(): void {
  }

  login() {
    this.router.navigateByUrl('/otp');
  }

  onSubmit() {
    this.userService.doLogin(this.loginForm.value).subscribe((data: any) => {
      this.user = data;
      this.userService.updateLoginUser(this.user);
      console.dir(this.user)
      this.userService.updateData({ username: this.user.username, mobile: this.user.mobile });
      this.router.navigateByUrl("/otp");
    }, (error: any) => {

    })
  }
}

