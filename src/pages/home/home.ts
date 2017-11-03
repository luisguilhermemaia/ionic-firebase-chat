import { UsersPage } from '../users/users';
import { SignupPage } from "./../signup/signup";
import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { LoginPage } from '../login/login';

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  constructor(public navCtrl: NavController) {}

  login() {
    this.navCtrl.push(LoginPage);
  }

  signup() {
    this.navCtrl.push(SignupPage);  
  }

  users() {
    this.navCtrl.push(UsersPage);
  }
}
