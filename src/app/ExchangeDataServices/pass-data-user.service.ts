import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import User from '../Entitys/User';

@Injectable({
  providedIn: 'root'
})

export class PassDataUserService {
  private dataBridge:BehaviorSubject<User>;
  public currentMessage:Observable<User>;

  constructor() { 
    this.dataBridge = new BehaviorSubject<User>(null);
    this.currentMessage= this.dataBridge.asObservable();
  }

  sendMessage(user:User){
    this.dataBridge.next(user);
  }
}
