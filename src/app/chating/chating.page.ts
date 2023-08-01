/* eslint-disable @typescript-eslint/no-unused-expressions */
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireDatabase } from '@angular/fire/compat/database';


@Component({
  selector: 'app-chating',
  templateUrl: './chating.page.html',
  styleUrls: ['./chating.page.scss'],
})
export class ChatingPage implements OnInit {
  dataUid={
    email:'',
    password:'',
  };
  userId='';
  email='';
  connected: boolean;
  messageText: any;
  userID: any;
  message=[];

  constructor(
    public fauth: AngularFireAuth,
    public fdb: AngularFireDatabase,
  ) { 
    this.fauth.authState.subscribe(auth=>{
      if (!auth) {
        console.log('user non connecté');
        this.connected=false;

      }
      else {
        console.log('user connecté' + 'avec '+auth.email);
        this.userId = auth.uid,
        this.email = auth.email,
        this.connected=true;
        this.getMessage();

      }
    });
  }
  ngOnInit() {
  }

  login(){
    this.fauth.signInWithEmailAndPassword
    (this.dataUid.email,this.dataUid.password);
    this. dataUid={
      email:'',
      password:'',
    };
  }
  signup(){
    this.fauth.createUserWithEmailAndPassword
    (this.dataUid.email,this.dataUid.password);
    this. dataUid={
      email:'',
      password:'',
    };
  }
  
  sendmessage(){
    console.log(this.messageText);
    this.fdb.list('chatmessage/').push({
      userId:this.userId,
      text:this.messageText,
      date:new Date().toISOString(),
    });
    this.messageText='';

  }
  getMessage(){
    this.fdb.list('chatmessage/').snapshotChanges(['child_added'])
    .subscribe(actions=>{
      this.message=[];
      actions.forEach(action =>{
        console.log(' MessageText : ' +action.payload.exportVal().text);
        this.message.push({
          text:action.payload.exportVal().text,
          userId:action.payload.exportVal().userId,
          date:action.payload.exportVal().date

        });
      }
      );}

    );
  }
}
