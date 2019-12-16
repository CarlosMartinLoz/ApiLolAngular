<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
=======
import { Component, OnInit, Input } from '@angular/core';
import User from 'src/app/Entitys/User';
>>>>>>> origin/master

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {
<<<<<<< HEAD

=======
  @Input() user:User;
>>>>>>> origin/master
  constructor() { }

  ngOnInit() {
  }

}
