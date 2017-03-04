import { NgModule } from '@angular/core';
import { AngularFireModule, AuthMethods } from 'angularfire2';

const firebaseConfig = {
  apiKey: 'AIzaSyCagZ559hSy9NeP7edqMnB_F-qDa5W283c',
  authDomain: 'bday-party-planner.firebaseapp.com',
  databaseURL: 'https://bday-party-planner.firebaseio.com',
  storageBucket: 'bday-party-planner.appspot.com',
  messagingSenderId: '904549505434',
};

@NgModule({
  imports: [
    AngularFireModule.initializeApp(firebaseConfig, {
      method: AuthMethods.Popup,
    })
  ],
})
export class CoreModule {}
