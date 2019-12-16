import { Component, OnInit } from '@angular/core';
import {Chart} from "chart.js";
import {PassDataUserService} from "../../ExchangeDataServices/pass-data-user.service"
import User from 'src/app/Entitys/User';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  public user:User;
  doughnut: any;
  data = {
    datasets: [{
        data: [10, 20, 30]
    }],
    labels: [
        'Red',
        'Yellow',
        'Blue'
    ]
};
  constructor(private bridgeService:PassDataUserService) { 
    bridgeService.currentMessage.subscribe(userData=>{this.user=userData;
    console.log(this.user)});
  }

  ngOnInit() {
    this.doughnut =  new Chart('doughnut',{
      type: 'doughnut',
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Win ratio'
        },legend: {
					position: 'top',
				},animation: {
					animateScale: true,
					animateRotate: true
				}
      },
      data: {
				datasets: [{
					data: [25,15],
					backgroundColor: ["red","orange","yellow","green","blue"],
					label: 'Dataset 1'
				}],
		
			}
    })
  }

}
