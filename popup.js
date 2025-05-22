console.log('This is a popup!');
//create a class with the constructor function that carries time data
//create a method to make a reminder that uses those times to show a popup
    //method should take two arguments, a string message and a time string
    //method needs to be able to save the reminder time and check it somehow
    //when the inputted time === real time there should be an alarm/tone that plays and a the message should pop into view on the browser

class Timer{
    constructor(){
        const now = new Date()
        this.timeNowStr = `${now.getHours()}:${now.getMinutes()}`; //returns current time as a string in 24 hour format
        this.boundReminder = this.setReminder.bind(this)
    }

    setReminder(remindStr,desiredTime){
        this.reminderMessage = remindStr;
        this.reminderTime = desiredTime;
    }

}

/*
AM/PM:
const now = new Date();
const hours = now.getHours();
const ampm = hours >= 12 ? 'PM' : 'AM';
const formattedHours = hours % 12 || 12; // Convert to 12-hour format

const currentTime = `${formattedHours}:${String(now.getMinutes()).padStart(2, '0')} ${ampm}`;

console.log(currentTime);
*/
