import { UserCredentials } from '../../models/user.model';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFireAuth } from 'angularfire2/auth';
import { BaseProvider } from '../base/base';

@Injectable()
export class AuthProvider extends BaseProvider{
  
  constructor(public auth: AngularFireAuth) {
    super();
  }
  
  createAuthUser(user: UserCredentials): Promise<any> {
    const { email, password } = user;
    return this.auth.auth.createUserWithEmailAndPassword(email, password)
      .catch(this.handlePromiseError);
  }

}
