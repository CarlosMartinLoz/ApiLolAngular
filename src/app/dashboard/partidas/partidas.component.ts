import { Component, OnInit, Input } from '@angular/core';
import User from 'src/app/Entitys/User';

@Component({
  selector: 'app-partidas',
  templateUrl: './partidas.component.html',
  styleUrls: ['./partidas.component.css']
})
export class PartidasComponent implements OnInit {
  @Input() user:User;
  constructor() { }

  ngOnInit() {
  }

}
