import { AngularFireList, AngularFireObject } from 'angularfire2/database/interfaces';
import { BaseProvider } from "../base/base";
import { AngularFireDatabase } from "angularfire2/database";
import { Injectable } from "@angular/core";
import 'rxjs/add/operator/map';
import { User } from "../../models/user.model";
import { Observable } from 'rxjs';

@Injectable()
export class UserProvider extends BaseProvider {
  private dbPath: string = "user";

  users: AngularFireList<User[]>;

  constructor(public db: AngularFireDatabase) {
    super();
    this.users = db.list(this.dbPath);
  }

  getUser(key: string): AngularFireObject<User> {
    return this.db.object(`${this.dbPath}/${key}`);
  }

  createUser(user) {
    return this.users.push(user);
  }

  userExists(username: string): Observable<User[]>{
    return this.db.list(this.dbPath, ref => ref.orderByChild('username').equalTo(username)).valueChanges();
  }
}
