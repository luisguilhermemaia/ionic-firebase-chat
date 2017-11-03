import { AngularFireAuthModule } from 'angularfire2/auth';
import { UsersPage } from '../pages/users/users';
import {  AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SignupPage } from './../pages/signup/signup';
import { LoginPage } from '../pages/login/login';

import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { UserProvider } from '../providers/user/user';

export const firebaseAppConfig: FirebaseAppConfig = {
  apiKey: "AIzaSyBbqrqNKEsBrA7ixJ355uT_39XMooliE4Y",
  authDomain: "ionic2-firebase-chat-b907e.firebaseapp.com",
  databaseURL: "https://ionic2-firebase-chat-b907e.firebaseio.com",
  projectId: "ionic2-firebase-chat-b907e",
  storageBucket: "ionic2-firebase-chat-b907e.appspot.com",
  messagingSenderId: "7436589222"
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    UsersPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAppConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    UsersPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider
  ]
})
export class AppModule {}
