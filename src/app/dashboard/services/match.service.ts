import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  private url:string = "http://localhost:8080/matches/"
  constructor(private http:HttpClient) { }

  fetchMatches(){
    
  }



}
