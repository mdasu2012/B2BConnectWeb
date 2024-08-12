import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "login.component.html"
})
export class LoginComponent implements OnInit {
  focus;
  focus1;
  constructor(private router: Router) { }

  ngOnInit() { }

  login() {
    this.router.navigateByUrl('/admin/dashboard');
  }
}
