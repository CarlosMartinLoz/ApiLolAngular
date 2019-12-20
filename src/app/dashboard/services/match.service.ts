import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import Match from 'src/app/Entitys/Match/Match';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  private url:string = "http://localhost:8080/matches/"
  constructor(private http:HttpClient) { }


    fetchMatches(accountId:string,from:number,to:number):Observable<Match[]>{
      return this.http.get<Match[]>(this.url+accountId+"/from/"+from+"/to/"+to);
    }
  



}
