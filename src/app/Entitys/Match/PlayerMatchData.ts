import PlayerMatchStatsData from './PlayerMatchStatsData';

export default class PlayerMatchData{
    spell1Id:number;
    spell2Id:number;
    participantId:number;
    teamId:number;
    win:boolean;
	championId:number;
    champion:string;
    stats:PlayerMatchStatsData;

}