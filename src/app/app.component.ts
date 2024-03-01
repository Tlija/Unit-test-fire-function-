import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import 'firebase/functions';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'my-firebase-app';
  // constructor() {
  //
  //   const config  = {
  //     apiKey: "AIzaSyCIcVg313AUX4UCkkXsUgFBcUIvBooCHXk",
  //     authDomain: "project-scope-605d7.firebaseapp.com",
  //     projectId: "project-scope-605d7",
  //     storageBucket: "project-scope-605d7.appspot.com",
  //     messagingSenderId: "869982372383",
  //     appId: "1:869982372383:web:f3073a98f72602b9e64b2a",
  //     measurementId: "G-V0JZH3219D"
  //   };
  //   firebase.initializeApp(config);
  //
  // }
  //
  // async onClick() {
  //   const helloWorld = firebase.functions().httpsCallable('helloWorld');
  //   try {
  //     const result = await helloWorld({});
  //     console.log(result.data);
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // }


}
