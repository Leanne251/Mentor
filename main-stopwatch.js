// create a stop watch. 
// seconds count from 0 to 60, then add one to minute, repeat
// when minutes gets to 60, go back to 0 and add 1 to hour.

//create three variables, seconds / minutes / hours.

// the count begins when the start button is pressed and stops when the stop button is pressed.
// when rest is pressed the count goes back to 00:00:00

const timer = document.getElementById('time')

// variables needed
let hr = 0;
let min = 0;
let sec = 0;
let stoptime = true;


// change timer off (true) to timer on (false)

function startTimer(){
    if (stoptime === true){
        stoptime = false;
        timerCycle();
    }
}

// change timer from on (false) to off (true)


function stopTimer(){
    if (stoptime === false){
        stoptime = true;
    }
}


//think about what happens when the timer is on & when the timer is off. 
//set a variable for the timers starting state which is off. 
// when button is clicked, function runs. 

//create function for what happens when timer is on

function timerCycle(){

if (stoptime === false){

 sec = parseInt(sec);
 min = parseInt(min);
 hr = parseInt(hr); 

// putting a zero in front of the number if figure is between 0 & 9.
// you must parse the numbers to turn them into a string so you can add the zero in front. 

 sec++;
 console.log(sec , "sec");

 if (sec == 60){
     min = min + 1;
     sec = 0;

     console.log(sec, "sec inside if statment")
 }
 
 if (min == 60);
 
 {
     hr = hr + 1;
     min = 0;
     sec = 0;

 console.log(min, typeof(hr), "min inside if statment")
 }
  

// to add the zero in front of the number


 if (sec < 10 || sec == 0){
    sec = '0' + sec;
  
}

if (min < 10 || min == 0){
    min = '0' + min;
}

if (hr < 10 || hr == 0){
    hr = '0' + hr;
    console.log(hr, "hr inside if statment")
}

console.log(sec, "sec",min, "min",hr, "hr");

timer.innerHTML = `${sec}:${min}:${hr}`;


setTimeout(timerCycle, 1000);

}


}

function resetTimer(){
    timer.innerHTML = '00:00:00';
    sec = 0;
    min = 0;
    hr = 0;
}