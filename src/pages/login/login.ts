import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { SignupPage } from "../signup/signup";

@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  loginForm: FormGroup;
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder
  ) {
    let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    this.loginForm = this.formBuilder.group({
      email: [
        "",
        Validators.compose([
          Validators.minLength(3),
          Validators.pattern(emailRegex)
        ])
      ],
      password: ["", [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    console.log(this.loginForm.value);
  }

  goToSignup() {
    this.navCtrl.push(SignupPage);
  }
}
