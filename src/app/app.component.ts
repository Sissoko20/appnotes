import { Component } from '@angular/core';
import { FCM } from '@ionic-native/fcm/ngx'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private fcm: FCM
  ) {

    this.initialiazeApp();
  }
  initialiazeApp() {
    this.fcm.onNotification().subscribe(data=>{
      if(data.wasTapped){
        console.log('Received to background');
      }else{
        console.log('Received in foreground');
      }
    });
  }
}
