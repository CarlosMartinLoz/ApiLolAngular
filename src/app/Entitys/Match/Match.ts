import PlayerMatchStatsData from './PlayerMatchStatsData';
import Player from "./Player";
import Team from './Team';

export default class Match{
    gameId:number;
    lane:string;
    platformId:string;
    teams:Team[];
    user:Player;
}