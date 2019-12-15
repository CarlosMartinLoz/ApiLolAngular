import { Component, OnInit } from '@angular/core';
import {SearchService} from "./search-service.service";
@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  playerName:any;
  response:any[];

  constructor(private searchService:SearchService) {
    this.playerName={nombre:"Feizan"}
   }

  ngOnInit() {
  }

  onSearch(){
    console.log(this.playerName);
    this.searchService.onSearch(this.playerName).subscribe(data=>{this.response=data;
    console.log(this.response)});
  }

  onTip(){
    console.log(this.playerName);
  }

}
