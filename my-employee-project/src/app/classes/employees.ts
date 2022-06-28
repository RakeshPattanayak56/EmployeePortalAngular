import { Time } from "@angular/common";


export class employees{
    id:number;
    userId:number;
    userName:string;
    login:Time;
    logout:Time;
    inDeskTimeIn:Time;
    inDeskTimeOut:Time;
    lastUpdateTime:Time;
    lastUpdatedBy:string;
    isActive:string;
  visible: boolean;
}