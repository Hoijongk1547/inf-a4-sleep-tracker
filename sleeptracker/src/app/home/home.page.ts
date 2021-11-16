import { Component } from '@angular/core';
import { SleepService } from '../services/sleep.service';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { DailyReportPage } from '../daily-report/daily-report.page';
import { AlertController, MenuController, ModalController } from '@ionic/angular';
import { SleepyScalePage } from '../sleepy-scale/sleepy-scale.page';
import { ViewLogDataPage } from '../view-log-data/view-log-data.page';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})

export class HomePage {

	constructor(public modalController: ModalController) { }

	ngOnInit() {
		//console.log(this.allSleepData);
	}

	async reportModal() {
		const modal = await this.modalController.create({
			component: DailyReportPage,
			cssClass: 'my-custom-class',
			componentProps: {

			}
		});
		return await modal.present();
	}

	async sleepinessModal() {
		const modal = await this.modalController.create({
			component: SleepyScalePage,
			cssClass: 'my-custom-class',
			componentProps: {

			}
		});
		return await modal.present();
	}

	async viewDataModal() {
		const modal = await this.modalController.create({
			component: ViewLogDataPage,
			cssClass: 'my-custom-class',
			componentProps: {

			}
		});
		return await modal.present();
	}

}
