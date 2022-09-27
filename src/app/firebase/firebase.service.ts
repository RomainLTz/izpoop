import { Inject, Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';

import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
    providedIn: 'root',
})
export class FirebaseService {

    constructor(
      private firebase: AngularFireDatabase
    ) { }

    all(): Observable<any> {
      return this.firebase.list('test').valueChanges().pipe(
        tap(d => {
          console.log(tap);
        }))
    }

}
