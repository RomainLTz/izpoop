import { getAuth, provideAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';

import { BrowserModule } from '@angular/platform-browser';
import { FirebaseService } from './firebase.service';
import { FirestoreModule } from '@angular/fire/firestore';
import { NgModule } from '@angular/core';
import { environment } from '../../environments/environment';

@NgModule({
  imports: [
    BrowserModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    FirestoreModule
  ],
  providers: [FirebaseService],
  bootstrap: []
})
export class FirebaseModule { }