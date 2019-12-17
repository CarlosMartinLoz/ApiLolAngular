import PlayerMatchStatsData from './PlayerMatchStatsData';
import Player from "./Player";

export default class Match{
    gameId:number;
    lane:string;
    platformId:string;
    participantIdentities:Player;
}