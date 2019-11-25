import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FIREBASE_CREDENTIALS } from './firebase.credentials';
import { ClientProvider } from '../providers/client/client';
import { ToastProvider } from '../providers/toast/toast';
import { EmployeeProvider } from '../providers/employee/employee';
import { ImageProvider } from '../providers/image/image';
import { Camera } from '@ionic-native/camera';
import { CutModelProvider } from '../providers/cut-model/cut-model';
import { CutProvider } from '../providers/cut/cut';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CREDENTIALS),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ClientProvider,
    ToastProvider,
    EmployeeProvider,
    ImageProvider,
    Camera,
    CutModelProvider,
    CutProvider
  ]
})
export class AppModule {}
