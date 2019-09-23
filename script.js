const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");
var interval;
var isTimerRuning=false;
function leadingZero(timer)
{
  if(timer <=9)
  {
    timer= "0"+timer;
  }
  return timer;
}


var timer =[0,0,0,0];
// Add leading zero to numbers 9 or below (purely for aesthetics):
function runTimer(){
  let timerText=leadingZero(timer[0])+":"+leadingZero(timer[1])+":"+leadingZero(timer[2]);
  theTimer.innerHTML= timerText;
  timer[3]++;

  timer[0]= Math.floor((timer[3]/100)/60);
  timer[1]= Math.floor((timer[3]/100)-(timer[0]*60));
  timer[2]= Math.floor(timer[3]-(timer[1]*100)-(timer[0]*6000));
}

// Run a standard minute/second/hundredths timer:


// Match the text entered with the provided text on the page:


// Start the timer:
function start()
{
  let textEnteredLength =testArea.value.length;
  if(textEnteredLength ===0 && !isTimerRuning)
  {
    isTimerRuning=true;
    interval=  setInterval(runTimer,10);
  }
  console.log(textEnteredLength);
}

function spellCheck(){
let textEnteredLength =testArea.value;
let originalText=originText.substring(0,textEnteredLength.length);

if(textEnteredLength == originText)
{
  clearInterval(interval);
  testWrapper.style.borderColor= "#429890";
} else{
   if(textEnteredLength == originalText) {
    testWrapper.style.borderColor= "#65CCF3";}
     else {
    testWrapper.style.borderColor= "#E95D0F";
}
}
}


// Reset everything:
function reset(){
clearInterval(interval);
interval=null;
timer=[0,0,0,0];
isTimerRuning=false;
testArea.value="";
theTimer.innerHTML="00:00:00";
testWrapper.style.borderColor= "grey";
console.log("reset button clicked");
}

// Event listeners for keyboard input and the reset button:
testArea.addEventListener("keypress",start,false);
testArea.addEventListener("keyup",spellCheck,false);
resetButton.addEventListener("click",reset,false);
