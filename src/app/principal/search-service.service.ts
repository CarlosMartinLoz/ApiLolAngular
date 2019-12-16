import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import User from "../Entitys/User";
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private uri:string = "http://192.168.1.104:8080/user/";
  constructor(private http:HttpClient) { }

  fetchUser(username:any):Observable<User>{
    return this.http.get<User>(this.uri.concat(username.nombre));
  }
}
