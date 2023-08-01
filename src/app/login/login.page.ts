/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
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

  dataImage={
    // eslint-disable-next-line max-len
    img1:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiLdoCJejnlwoSjrMgWswhZT0PY-h0mlMIACZa__vVrY_P_H3w92YOgNWowKl_OsHBlaw&usqp=CAU',
    img2:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjX3UFrEHTHP36nwUgW2JgiKPabSE1ywOePA&usqp=CAU',
    img3:'https://www.vecteezy.com/vector-art/8296859-concept-illustration-of-man-and-woman-friends-having-online-conversation-messaging-chatting-communication-texting-messages-in-mobile-phone-apps-flat-cartoon-style',
  };

  constructor(
    public fauth: AngularFireAuth,
    public fdb: AngularFireDatabase,
    public router: Router
  // eslint-disable-next-line no-trailing-spaces
  ) { 
    this.fauth.authState.subscribe(auth=>{
      if (!auth) {
        console.log('user non connecté');
        this.connected=false;

      }
      else {
        console.log('user connecté' + 'avec '+auth.email);
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        this.userId = auth.uid,
        this.email = auth.email,
        this.connected=true;
        this.router.navigateByUrl('tabs/home');

      }
    });
  }
  ngOnInit() {
  }

  login(){
    this.fauth.signInWithEmailAndPassword
    (this.dataUid.email,this.dataUid.password);
    

  }
  signup(){
    this.fauth.createUserWithEmailAndPassword
    (this.dataUid.email,this.dataUid.password);
    this. dataUid={
      email:'',
      password:'',
    };
  }
  logout(){
    this.fauth.signOut();
    console.log('user deconneté');
    this.connected=false;

  }

}
