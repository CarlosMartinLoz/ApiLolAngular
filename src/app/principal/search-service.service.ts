import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
<<<<<<< HEAD
=======
import User from "../Entitys/User";
>>>>>>> origin/master
@Injectable({
  providedIn: 'root'
})
export class SearchService {
<<<<<<< HEAD
  url:string;
  constructor(private http:HttpClient) { 
    this.url="http://localhost:8080/matches/14kVWlnr-rj2aq2lcrkyyAfGqeqi7y5uGyJI6siBPvfUzA";
  }

  onSearch(username:string):Observable<any[]>{
    return this.http.get<any[]>(this.url);
=======
  private uri:string = "http://192.168.1.104:8080/user/";
  constructor(private http:HttpClient) { }

  fetchUser(username:any):Observable<User>{
    return this.http.get<User>(this.uri.concat(username.nombre));
>>>>>>> origin/master
  }
}
