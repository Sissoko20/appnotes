import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//libs firebase
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabase, AngularFireDatabaseModule } from '@angular/fire/compat/database';

import { FCM } from '@ionic-native/fcm/ngx';

import { OneSignal } from 'onesignal-ngx';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
    AngularFireModule.initializeApp(environment.config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
    AngularFireDatabaseModule,//database
    IonicModule.forRoot(), AppRoutingModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    FCM, OneSignal],
  bootstrap: [AppComponent],
})
export class AppModule {}
