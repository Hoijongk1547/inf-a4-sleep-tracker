import { SleepData } from './sleep-data';

export class OvernightSleepData extends SleepData {
	private sleepStart: Date;
	private sleepEnd: Date;

	constructor(sleepStart: Date, sleepEnd: Date) {
		super();
		this.sleepStart = sleepStart;
		this.sleepEnd = sleepEnd;
	}
	totalAmountofSleep(): any {
		var startDate = new Date(this.sleepStart);
		var endDate = new Date(this.sleepEnd);
		var sleepStart_ms = startDate.getTime();
		var sleepEnd_ms = endDate.getTime();

		// Calculate the difference in milliseconds
		var difference_ms = sleepEnd_ms - sleepStart_ms;
		if (difference_ms == 0) {
			return 0;
		} else if (difference_ms < 0) {
			return -1;
		}
	}
	summaryString(): string {
		//Though I passed dates as Date, it gets string. So I have to declare new Date again.
		var startDate = new Date(this.sleepStart);
		var endDate = new Date(this.sleepEnd);
		var sleepStart_ms = startDate.getTime();
		var sleepEnd_ms = endDate.getTime();

		// Calculate the difference in milliseconds
		var difference_ms = sleepEnd_ms - sleepStart_ms;

		// Convert to hours and minutes
		return Math.floor(difference_ms / (1000 * 60 * 60)) + " hours, " + Math.floor(difference_ms / (1000 * 60) % 60) + " minutes.";
	}

	dateString(): string {
		var startDate = new Date(this.sleepStart);
		//SET THE DEFAULT TIME ZONE : PST
		var pstTime = startDate.getUTCHours() - 8;
		//console.log("START TIME : \t\t" + pstTime);

		//IF START TIME IS OVER 8:00PM to 5:00AM
		if (pstTime >= -4 && pstTime <= 5) {
			return "Night of " + startDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
		} else {
			//IF START TIME IS OVER 5:00AM to 7:00PM
			return "Day of " + startDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });

		}

	}
}
