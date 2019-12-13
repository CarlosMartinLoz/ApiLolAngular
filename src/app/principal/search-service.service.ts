import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  url:string;
  constructor(private http:HttpClient) { 
    this.url="http://localhost:8080/matches/14kVWlnr-rj2aq2lcrkyyAfGqeqi7y5uGyJI6siBPvfUzA";
  }

  onSearch(username:string):Observable<any[]>{
    return this.http.get<any[]>(this.url);
  }
}
