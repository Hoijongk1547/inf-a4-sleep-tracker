import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { SleepService } from '../services/sleep.service';

@Component({
  selector: 'app-logsleep',
  templateUrl: './logsleep.page.html',
  styleUrls: ['./logsleep.page.scss'],
})
export class LogsleepPage implements OnInit {

  myDatee: String = new Date().toISOString();


  constructor(public sleepService:SleepService, private modalCtrl: ModalController) { }

  //CLOSE REPORT PAGE MODAL
  async close(){
     await this.modalCtrl.dismiss();
     }

 saveData(){
  var start ;
  var end = new Date();
   var data = new OvernightSleepData(start,end);
  //  console.log('startDate:   '+start);
  //  console.log('endDate:   '+end);
  //  console.log('summary:   '+data.summaryString());
  //  console.log('endDate:   '+data.dateString());
 }


  ngOnInit() {
  }

}
