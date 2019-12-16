import { Component, OnInit, Input } from '@angular/core';
import User from 'src/app/Entitys/User';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {
  @Input() user:User;
  constructor() { }

  ngOnInit() {
  }

}
