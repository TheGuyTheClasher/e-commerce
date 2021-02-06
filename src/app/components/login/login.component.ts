import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login_model = {
    username: '',
    password: '',
    remember: false
  };

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit_login_form() {
    console.log();
    console.log(this.login_model);
  }

}
