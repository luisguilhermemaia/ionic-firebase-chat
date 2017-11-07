import { AuthProvider } from "../../providers/auth/auth";
import { UsersPage } from "./../users/users";
import { Component } from "@angular/core";
import {
  AlertController,
  Loading,
  LoadingController,
  NavController,
  NavParams
} from "ionic-angular";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserProvider } from "../../providers/user/user";

@Component({
  selector: "page-signup",
  templateUrl: "signup.html"
})
export class SignupPage {
  signupForm: FormGroup;
  usernameText: string;
  usernameAvailable: boolean;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public formBuilder: FormBuilder,
    public userProvider: UserProvider,
    public authProvider: AuthProvider
  ) {
    let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    this.signupForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(3)]],
      username: ["", [Validators.required, Validators.minLength(3)]],
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

  onSubmit(e) {
    e.preventDefault();

    let loading: Loading = this.showLoading();
    let formUser = this.signupForm.value;

    return this.authProvider
      .createAuthUser(formUser)
      .then(authState => {
        delete formUser.password;
        formUser.uid = authState.uid;
        return this.userProvider.createUser(formUser);
      })
      .then(res => {
        console.log("Usuário cadastrado com sucesso!");
        return this.navCtrl.push(UsersPage);
      })
      .catch((err: any) => {
        console.log(err);
        this.showAlert(err);
      })
      .then(() => loading.dismiss());
  }

  showLoading(): Loading {
    let loading: Loading = this.loadingCtrl.create({
      content: "Please wait..."
    });

    loading.present();

    return loading;
  }

  showAlert(message: string) {
    this.alertCtrl
      .create({
        message: message,
        buttons: ["Ok"]
      })
      .present();
  }

  checkUsername() {
    this.userProvider
      .userExists(this.usernameText)
      .subscribe(
        (userExists: boolean) => (this.usernameAvailable = !userExists)
      );
  }
}
