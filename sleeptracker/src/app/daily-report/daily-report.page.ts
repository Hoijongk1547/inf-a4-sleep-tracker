import { Component, Input, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { SleepService } from '../services/sleep.service';
import {Storage} from '@ionic/storage'
@Component({
  selector: 'app-daily-report',
  templateUrl: './daily-report.page.html',
  styleUrls: ['./daily-report.page.scss'],


  
})
export class DailyReportPage  {
   start:Date = new Date();
   end:Date = new Date();



  constructor(public sleepService:SleepService,public alertController: AlertController, private modalCtrl: ModalController, private storage:Storage) { }

  //CLOSE REPORT PAGE MODAL
  async close(){
     await this.modalCtrl.dismiss();
     }



	async presentAlert() {
    var data = new OvernightSleepData(this.start,this.end);
    //ERROR MESSAGE IF END DATE IS SAME AS START DATE OR EARLIER THAN START DATE
    if(data.totalAmountofSleep()<=0 ){
		const alert = await this.alertController.create({
		  cssClass: 'my-custom-class',
		  header: 'Error',
		  //subHeader: 'Subtitle',
		  message: 'Enter a valid start time or end time!',
		  buttons: ['OK']
    });
    await alert.present();
    
    }else{
      //SUCCESS MESSAGE
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Success',
        //subHeader: 'Subtitle',
        message: 'Daily sleep report successfully saved!',
        buttons: ['OK']
        
      });
      this.saveData();
      await alert.present();
    }
		
	  }

  ngOnInit() {
    
  }



  saveData(){
    var data = new OvernightSleepData(this.start,this.end);
    this.storage.set("Summary", data.summaryString()).then(()=>{
     this.sleepService.logOvernightData(data);
    });
 
    
  }
}
