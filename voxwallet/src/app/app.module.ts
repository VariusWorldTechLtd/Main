import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';

import { Web3Module, Web3Service } from './web3';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

import { AngularFireAuthModule } from '@angular/fire/auth';

import { Camera } from '@ionic-native/camera/ngx';
import { QRScanner  } from '@ionic-native/qr-scanner/ngx';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule.forRoot(), // { mode: 'ios'}
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    Web3Module,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    QRScanner,
    Web3Service,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
