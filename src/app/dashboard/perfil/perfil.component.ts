<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';

=======
import { Component, OnInit, Input } from '@angular/core';
import {Chart} from "chart.js";

import User from 'src/app/Entitys/User';
>>>>>>> origin/master
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
<<<<<<< HEAD

  constructor() { }

  ngOnInit() {
=======
  @Input() user:User;

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
					data: [25,15],
					backgroundColor: ["red","orange","yellow","green","blue"],
					label: 'Dataset 1'
				}],
		
			}
    })
>>>>>>> origin/master
  }

}
