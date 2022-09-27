import { Component } from '@angular/core';
import { FirebaseService } from './firebase/firebase.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'izpoop';

  message = "[WIP] Zone de chantier, izpoop est en cours de construction...";

  data: Observable<any> = this.firebaseService.all();

  constructor(private firebaseService: FirebaseService) {}
}
