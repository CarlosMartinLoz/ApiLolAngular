import { Component, OnInit } from '@angular/core';
import {Chart} from "chart.js";
@Component({
  selector: 'app-campeones',
  templateUrl: './campeones.component.html',
  styleUrls: ['./campeones.component.css']
})
export class CampeonesComponent implements OnInit {
  doughnut: any;
  constructor() { }

  ngOnInit() {
    this.doughnut =  new Chart('doughnut2',{
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
