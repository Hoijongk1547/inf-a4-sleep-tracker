import { Injectable } from '@angular/core';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import {Storage} from '@ionic/storage'
@Injectable({
  providedIn: 'root'
})
export class SleepService {
	private static LoadDefaultData:boolean = true;
	public static AllSleepData:SleepData[] = [];
	public static AllOvernightData:OvernightSleepData[] = [];
	public static AllSleepinessData:StanfordSleepinessData[] = [];


  constructor(private storage:Storage) {
    if(SleepService.LoadDefaultData) {
      this.addDefaultData();
  		SleepService.LoadDefaultData = false;
    }
    
    this.loadDataFromStorage();
  }

  private addDefaultData() {
    this.logOvernightData(new OvernightSleepData(new Date('November 17, 2019 01:03:00'), new Date('November 17, 2019 09:25:00')));
    this.logSleepinessData(new StanfordSleepinessData(4, new Date('November 17, 2019 14:38:00')));
    this.logOvernightData(new OvernightSleepData(new Date('November 18, 2019 23:11:00'), new Date('November 18, 2019 08:03:00')));
  }

  public logOvernightData(sleepData:OvernightSleepData) {
    this.storage.set(sleepData.id,sleepData);
    SleepService.AllSleepData.push(sleepData);
    SleepService.AllOvernightData.push(sleepData);

  }

  public logSleepinessData(sleepData:StanfordSleepinessData) {
    this.storage.set(sleepData.id,sleepData);
    SleepService.AllSleepData.push(sleepData);
    SleepService.AllSleepinessData.push(sleepData);

    
  }

  public loadDataFromStorage(){
    this.storage.forEach((key,value,index)=>{
      if(key.type =='sleep'){
       // console.log("THIS IS SLEEP");
        var LoggedSleep:OvernightSleepData = new OvernightSleepData(new Date(key['sleepStart']), new Date(key['sleepEnd']));
        SleepService.AllOvernightData.push(LoggedSleep);
      }else if(key.type=='sleepiness'){
        //console.log("THIS IS SLEEPINESS");
        var LoggedSleepiness:StanfordSleepinessData=new StanfordSleepinessData(key.loggedValue, new Date(key.loggedAt));
        SleepService.AllSleepinessData.push(LoggedSleepiness);
       // SleepService.AllOvernightData.push(value);
      }
      //SleepService.AllSleepData.push(value);
    });
  }

  

  clearStorage(){
    SleepService.AllSleepData = [];
    this.storage.clear();
  }
}
