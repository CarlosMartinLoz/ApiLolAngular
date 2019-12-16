<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
=======
import { Component, OnInit, Input } from '@angular/core';
import User from 'src/app/Entitys/User';
>>>>>>> origin/master

@Component({
  selector: 'app-partidas',
  templateUrl: './partidas.component.html',
  styleUrls: ['./partidas.component.css']
})
export class PartidasComponent implements OnInit {
<<<<<<< HEAD

=======
  @Input() user:User;
>>>>>>> origin/master
  constructor() { }

  ngOnInit() {
  }

}
