import { Component, OnInit, Input } from '@angular/core';
import User from 'src/app/Entitys/User';
import {PassDataUserService} from "../../ExchangeDataServices/pass-data-user.service";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user:User;
  constructor(private bridgeService:PassDataUserService) {
    bridgeService.currentMessage.subscribe(userData=>{this.user=userData;
      console.log(this.user)});
   }

  ngOnInit() {
  }

}
