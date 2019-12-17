import { Component, OnInit, Input } from '@angular/core';
import User from 'src/app/Entitys/User';
import {PassDataUserService} from "../../ExchangeDataServices/pass-data-user.service";
import { ActivatedRoute } from "@angular/router";
import { SearchService } from 'src/app/principal/search-service.service';
import { UserInformationService } from '../services/user-information.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user:User;
  private nombreuri:string;
  constructor(private bridgeService:PassDataUserService, 
              private userInformationService:SearchService,
              private route:ActivatedRoute) {

    if(typeof this.user === 'undefined'||!this.user){
      
      this.userInformationService.fetchUser( {nombre:this.route.snapshot.paramMap.get("nombre").toString()})
              .subscribe(data=>{this.user=data;
              console.log(data)});
    }
   }

  ngOnInit() {
  }

}
