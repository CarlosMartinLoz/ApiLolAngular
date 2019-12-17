import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import User from 'src/app/Entitys/User';
import { SearchService } from 'src/app/principal/search-service.service';
import { PassDataUserService } from 'src/app/ExchangeDataServices/pass-data-user.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  buscarName:any;
  response: User;

  constructor(private searchService: SearchService
    , private bridgeService: PassDataUserService
    , private router: Router) {
    this.buscarName = { nombre: "Juankos" }
  }

  ngOnInit() {
  }

  onSearch() {
    this.searchService.fetchUser(this.buscarName).subscribe(data => {
      this.bridgeService.sendMessage(data);
      this.router.navigate(["/dashboard", data.name])
    });
  }

  onTip() {
    console.log(this.buscarName);
  }


}
