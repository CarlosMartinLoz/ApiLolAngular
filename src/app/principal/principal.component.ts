import { Component, OnInit } from '@angular/core';
import {SearchService} from "./search-service.service";
<<<<<<< HEAD
=======
import User from "../Entitys/User";
import { PassDataUserService } from '../ExchangeDataServices/pass-data-user.service';

>>>>>>> origin/master
@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  playerName:any;
<<<<<<< HEAD
  response:any[];

  constructor(private searchService:SearchService) {
=======
  response:User;

  constructor(private searchService:SearchService, private bridgeService:PassDataUserService) {
>>>>>>> origin/master
    this.playerName={nombre:"Feizan"}
   }

  ngOnInit() {
  }

  onSearch(){
    console.log(this.playerName);
<<<<<<< HEAD
    this.searchService.onSearch(this.playerName).subscribe(data=>{this.response=data;
    console.log(this.response)});
=======
    this.searchService.fetchUser(this.playerName).subscribe(data=>{this.bridgeService.sendMessage(data);
    console.log(data)});
>>>>>>> origin/master
  }

  onTip(){
    console.log(this.playerName);
  }

}
