import Champion from "./Champions";
import RankStats from './RankStats';

export default class User{
    name:string;
    puuid:string;
    level:number;
    accountId:string;
    id:string;
    champions:Champion;
    rankStats:RankStats
}