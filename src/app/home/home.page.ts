/* eslint-disable @typescript-eslint/quotes */
import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireDatabase } from '@angular/fire/compat/database';

import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { OneSignal } from 'onesignal-ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  dataUser = {
    email: '',
    password: '',
  };
  datastore = {
    text: '',
    img: '',
  };
  messageText: any;
  userId: any;
  email: any;
  connected: boolean;
  collection: Observable<any[]>;
  messages = [];

  title="angular-example-app";

  constructor(
    private dbAuth: AngularFireAuth,
    public store: AngularFirestore,
    public storemessage: AngularFireDatabase,
    public router: Router,
    private oneSignal: OneSignal
  ) {
    this.dbAuth.authState.subscribe((auth) => {
      if (!auth) {
        this.connected = false;
        console.log('user non connecté');
      } else {
        console.log('user connected');
        this.connected = true;
        this.userId = auth.uid;
        this.email= auth.email;
      }
    });
    this.collection = this.store.collection('storeidea').valueChanges();
    this.getMessages();
    this.initialiazeApp();
  }
  initialiazeApp() {
    this.oneSignal.init({
      appId:'a771b582-8d49-4765-829b-06090dabf05f',
    }).then(()=>{


    });
  }

  logout() {
    this.dbAuth.signOut();
    console.log('user deconneté');
    this.connected = false;
    this.router.navigateByUrl('/login');
  }

  save() {
    this.store.collection('storeidea').add(this.datastore);
    console.log('Done successfully');
    this.datastore = {
      text: '',
      img: '',
    };
  }
  send() {
    console.log(this.messageText);
    this.storemessage.list('Messages/').push({
      userId: this.userId,
      text: this.messageText,
      date: new Date().toISOString(),
    });
    this.messageText = '';
  }

  getMessages() {
    this.storemessage
      .list('Messages')
      .snapshotChanges(['child_added'])
      .subscribe((actions) => {
        this.messages = [];
        actions.forEach((action) => {
          console.log('MessageText : ' + action.payload.exportVal().text);
          this.messages.push({
            text: action.payload.exportVal().text,
            userId: action.payload.exportVal().userId,
            date: action.payload.exportVal().date,
          });
        });
      });
  }
}


