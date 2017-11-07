export class User {
  name: string;
  username: string;
  email: string;
  uid: string;
}

export class UserCredentials extends User {
  password: string;
}
