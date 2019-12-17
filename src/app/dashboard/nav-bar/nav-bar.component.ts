import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import User from 'src/app/Entitys/User';
import { SearchService } from 'src/app/principal/search-service.service';
import { PassDataUserService } from 'src/app/ExchangeDataServices/pass-data-user.service';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  buscarName:any;
  response: User;
  form:FormGroup = new FormGroup({
    nombre: new FormControl("")
  });

  constructor(private searchService: SearchService
    , private bridgeService: PassDataUserService
    , private router: Router) {
  
  }

  ngOnInit() {
  }

  onSearch() {
    this.router.navigate(["/dashboard", this.form.get("nombre").value]).then(()=> window.location.reload());
   
   
  }

  onTip() {
    console.log(this.form.get("nombre"));
  }


}
