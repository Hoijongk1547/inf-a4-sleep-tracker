--Readme document for *author(s)*, *email(s)*, *UCI id(s)*--
Hoijong Kim, hoijongk@uci.edu, 41386713

1. How many assignment points do you believe you completed (replace the *'s with your numbers)?

10/10
- 1/1 The ability to log overnight sleep
- 1/1 The ability to log sleepiness during the day
- 1/1 The ability to view these two categories of logged data
- 2/2 Either using a native device resource or backing up logged data
- 2/2 Following good principles of mobile design
- 2/2 Creating a compelling app
- 1/1 A readme which explains how these features were implemented and their design rationale

2. How long, in hours, did it take you to complete this assignment?
30 hours


3. What online resources did you consult when completing this assignment? (list specific URLs)
Currrent time
https://forum.ionicframework.com/t/datetime-default-to-todays-date/53178/26
ionic 
https://www.youtube.com/watch?v=S3jr8mkhFlY&list=PLrg1HIcSWTqiMhM4SPpVt9B1sdlZokbC3&index=13
4. What classmates or other individuals did you consult as part of this assignment? What did you discuss?
Ionic Frameworks
https://ionicframework.com/docs/api/footer and https://ionicframework.com/docs/v3/components/#segment



5. Is there anything special we need to know in order to run your code?

- When you enter "Report sleep time" or "Report sleepiness," it doesn't show time correctly.
So You must go back to home page and re-enter the page(sleep time and sleepiness pages), then it will show the date time correctly.
Otherwise, it returns an error. 

- backup-log-data and logsleep pages aren't used for this assignment.(home, logsleep, sleepy-scale, view-log-data pages are implemented.)

--Aim for no more than two sentences for each of the following questions.--


6. Did you design your app with a particular type of user in mind? If so, whom?
-No, this app is for everyone.

7. Did you design your app specifically for iOS or Android, or both?
- I focused on making no differences between iOS and Android.

8. How can a person log overnight sleep in your app? Why did you choose to support logging overnight sleep in this way?
- A person chooses start date and end date with using ion-datetime. 
I was thinking about having a button for start and end sleep instead, 
but people often not sleep right away as they press the button nor press end button as soon as they wake up.   


9. How can a person log sleepiness during the day in your app? Why did you choose to support logging sleepiness in this way?
- When a person enter the sleepiness page, the default time is when user enter the page(user can select a different time). Then user only need to select a scale and save it.
It's because user wants to save sleepiness when they open the app, but not for the future.



10. How can a person view the data they logged in your app? Why did you choose to support viewing logged data in this way?
- A person enter the view logged data page to see all data(sleep log and sleepiness log.)
I wanted to sort it by date, but couldn't implement.

11. Which feature choose--using a native device resource, backing up logged data, or both?



12. If you used a native device resource, what feature did you add? How does this feature change the app's experience for a user?



13. If you backed up logged data, where does it back up to?
- In ionic storage.


14. Did you add any "extra" features, such as other data to log, the ability to edit or delete data, 
or changes to the styling of the app? If so, what did you add? How do these add to the experience of the app?
- This app doesn't allow to delete a single data, but deletes all data.
