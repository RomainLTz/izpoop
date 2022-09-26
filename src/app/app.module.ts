import { ComponentsModule } from '@izpoop/components';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FirebaseModule } from './firebase/firebase.module';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FirebaseModule,
        ComponentsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
