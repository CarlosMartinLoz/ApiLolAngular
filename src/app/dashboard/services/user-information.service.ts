import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import User from '../../Entitys/User';
@Injectable({
  providedIn: 'root'
})
export class UserInformationService {
  private uri = "http://localhost:8080/user/";
  constructor(private http:HttpClient) { }

  fetchUser(username:string){
    
    this.http.get<User>(this.uri+username);
  }
}
