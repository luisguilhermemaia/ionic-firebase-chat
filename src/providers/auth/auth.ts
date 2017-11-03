import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthProvider {

  constructor(public auth: AngularFireAuth) {}
  
  createAuthUser({email, password}: {email: string, password: string}): Promise<any> {
    return this.auth.auth.createUserWithEmailAndPassword(email, password);
  }

}
