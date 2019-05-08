import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy, ModalController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { IonicStorageModule } from '@ionic/storage';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { ImageProviderService } from '../app/image-provider-service.service';
import { Camera } from '@ionic-native/camera/ngx';
import { ModalPagePageModule } from './modal-page/modal-page.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, 
  AngularFireModule.initializeApp(environment.firebase),
  AngularFirestoreModule,
  IonicModule.forRoot(),
  ModalPagePageModule,
  IonicStorageModule.forRoot()],
  
  providers: [
    StatusBar,
    SplashScreen,
    ImageProviderService,
    Camera,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
