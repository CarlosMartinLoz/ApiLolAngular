import { Component, OnInit } from '@angular/core';
import {SearchService} from "./search-service.service";
import User from "../Entitys/User";
import { PassDataUserService } from '../ExchangeDataServices/pass-data-user.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  playerName:any;
  response:User;

  constructor(private searchService:SearchService
              , private bridgeService:PassDataUserService
              ,private router: Router) {
    this.playerName={nombre:"Feizan"}
   }

  ngOnInit() {
  }

  onSearch(){
    console.log(this.playerName);
    this.searchService.fetchUser(this.playerName).subscribe(data=>{this.bridgeService.sendMessage(data);
    this.router.navigate(["/dashboard",data.name])
  });
  }

  onTip(){
    console.log(this.playerName);
  }

}
