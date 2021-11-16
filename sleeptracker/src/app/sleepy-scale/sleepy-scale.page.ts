import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { Storage } from '@ionic/storage'
import { SleepService } from '../services/sleep.service';
@Component({
  selector: 'app-sleepy-scale',
  templateUrl: './sleepy-scale.page.html',
  styleUrls: ['./sleepy-scale.page.scss'],
})
export class SleepyScalePage implements OnInit {
  myDate: Date = new Date();
  scale: number;
  constructor(public sleepService:SleepService, private modalCtrl: ModalController, private alertController: AlertController) { }

  async close() {
    await this.modalCtrl.dismiss();
  }

  saveData() {
    console.log('Scale' + this.scale);

    var sleepiness = new StanfordSleepinessData(this.scale, this.myDate);
    console.log(sleepiness.summaryString());
    this.sleepService.logSleepinessData(sleepiness);
  }

  
  async presentAlert() {
    if(this.scale != undefined){
      const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Success',
      //subHeader: 'Subtitle',
      message: 'Daily sleepiness report successfully saved!',
      buttons: ['OK']
     
    });
    this.saveData();
    await alert.present();} 
    else{
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Error',
        //subHeader: 'Subtitle',
        message: 'Please select a scale.',
        buttons: ['OK']
      });
  
      await alert.present();
     }

  }

  ngOnInit() {
  }

}
