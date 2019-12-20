import { Component, OnInit, Input } from '@angular/core';
import {Chart} from "chart.js";

import User from 'src/app/Entitys/User';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  @Input() user:User;

  doughnut:Chart;
 
  constructor() { 
  
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
					data: [this.user.rankStats.wins,this.user.rankStats.losses],
					backgroundColor: ["yellow","orange","yellow","green","blue"],
					label: 'Dataset 1'
				}],
		
			}
    })
  }

  ngOnChanges(changes: any) {

    // You can also use categoryId.previousValue and 
    // categoryId.firstChange for comparing old and new values

}

}
