import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs/internal/BehaviorSubject";

@Injectable({
  providedIn: 'root'
})
export class PageService {

  pageTitleSource = new BehaviorSubject<string>('News');
  currentTitle = this.pageTitleSource.asObservable();

  user = new BehaviorSubject<string>('');
  currentUser = this.user.asObservable();



  constructor() { }

  changeTitle(title) {
    this.pageTitleSource.next(title);
  }

  logInUser(username) {
    this.user.next(username)
  }

}
