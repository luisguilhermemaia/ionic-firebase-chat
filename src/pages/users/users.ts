import { UserProvider } from "../../providers/user/user";
import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { User } from "../../models/user.model";
import { AngularFireList } from 'angularfire2/database/interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: "page-users",
  templateUrl: "users.html"
})
export class UsersPage {
  users: Observable<User[]>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public userProvider: UserProvider
  ) {}

  ionViewDidLoad() {
    this.users = this.userProvider.users.valueChanges();
  }

  onChatCreate(user) {
    console.log(user);
  }
}
