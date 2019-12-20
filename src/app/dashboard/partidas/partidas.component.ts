import { Component, OnInit, Input } from '@angular/core';
import User from 'src/app/Entitys/User';
import { MatchService } from '../services/match.service';
import Match from 'src/app/Entitys/Match/Match';
import {Chart} from "chart.js";
import Player from 'src/app/Entitys/Match/Player';

@Component({
  selector: 'app-partidas',
  templateUrl: './partidas.component.html',
  styleUrls: ['./partidas.component.css']
})
export class PartidasComponent implements OnInit {
  @Input() user: User;
  matches: Match[];
  private from:number;
  private to:number;
  doughnut:Chart;
  constructor(private matchService: MatchService) {

  }

  ngOnInit() {
    this.from = 0;
    this.to= 4;
    console.log(this.user.name);
    this.matches = [];
    console.log(this.user.accountId);
    this.matchService.fetchMatches(this.user.accountId, this.from, this.to).subscribe(data => {
      this.matches = data;
      this.matches=this.onChange(this.matches);

    }
    

    );
  }



  onChange(data:Match[]):Match[]{
    
    data.map((match)=> {
      console.log("Entras en el equ"+match.teams.length);
      for(let i = 0;i<match.teams[0].teamPlayers.length;i++){
        if(match.teams[0].teamPlayers[i].player.summonerName===this.user.name){
          console.log("entrar");
          match.user =match.teams[0].teamPlayers[i];
          match.user.KDA = Math.round(((match.user.player.playerMatchData.stats.kills+match.user.player.playerMatchData.stats.assists)/match.user.player.playerMatchData.stats.deaths)*100)/100;
          
          break;
        }else if(match.teams[1].teamPlayers[i].player.summonerName==this.user.name){
          match.user =match.teams[1].teamPlayers[i];
          match.user.KDA = Math.round(((match.user.player.playerMatchData.stats.kills+match.user.player.playerMatchData.stats.assists)/match.user.player.playerMatchData.stats.deaths)*100)/100;
          break;
        }
      }
    } );

    


    return data;
  }

  onButton(){
    this.from+=4;
    this.to+=4;

    this.matchService.fetchMatches(this.user.accountId, this.from, this.to).subscribe(data => {

      this.matches= [...this.matches,...data] ;
      this.onChange(data);
    }
    

    );
    
  }

}
