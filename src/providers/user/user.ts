import {
  AngularFireDatabase,
  FirebaseObjectObservable,
  FirebaseListObservable
} from "angularfire2/database-deprecated";
import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
import { User } from "../../models/user.model";

@Injectable()
export class UserProvider {
  private dbPath: string = "/user";

  users: FirebaseListObservable<User[]>;

  constructor(public db: AngularFireDatabase) {
    this.users = this.getUsersList();
  }

  getUsersList(query = {}): FirebaseListObservable<User[]> {
    return this.db.list(this.dbPath, {
      query: query
    });
  }

  getUser(key: string): FirebaseObjectObservable<User> {
    return this.db.object(`${this.dbPath}/${key}`);
  }

  createUser(user: User): any {
    return this.users.push(user);
  }

  updateUser(key: string, value: any): Promise<void> {
    return this.users
      .update(key, value)
      .catch(error => this.handleError(error));
  }

  deleteUser(key: string): Promise<void> {
    return this.users.remove(key).catch(error => this.handleError(error));
  }

  deleteAll(): Promise<void> {
    return this.users.remove().catch(error => this.handleError(error));
  }

  private handleError(error) {
    console.log(error);
  }
}
