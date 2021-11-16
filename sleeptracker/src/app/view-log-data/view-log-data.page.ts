import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { SleepService } from '../services/sleep.service';

@Component({
  selector: 'app-view-log-data',
  templateUrl: './view-log-data.page.html',
  styleUrls: ['./view-log-data.page.scss'],
})
export class ViewLogDataPage implements OnInit {
  sleepData:any = this.allSleepData;
  constructor(public sleepService:SleepService,private modalCtrl: ModalController, private alertController:AlertController) { }

  async close(){
     await this.modalCtrl.dismiss();
     }

  ngOnInit() {
  }
	clear(){this.sleepService.clearStorage();}

  get allSleepData() {
		
		return SleepService.AllSleepData;
  }
  
	async presentAlert() {
   
    //ERROR MESSAGE IF END DATE IS SAME AS START DATE OR EARLIER THAN START DATE
   
		const alert = await this.alertController.create({
		  cssClass: 'my-custom-class',
		  header: 'Success',
		  //subHeader: 'Subtitle',
		  message: 'Cleared the data successfully! \nGo back and re-enter here to see the data cleared!',
		  buttons: ['OK']
    });
    await alert.present();
  }



}
