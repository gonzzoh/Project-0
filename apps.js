//DOM references//

const startEl = document.getElementById('btn-start');
const feedEl = document.getElementById('btn-feed');
const advEl = document.getElementById('btn-adventure');
const sleepEl = document.getElementById('btn-night')
let interval = null;


//////////////////////////////////////////////////////////////////////

//VARIABLES//

// variable for start timer
let timer = 0;

// variable for hunger
let sustenance = 10

// variable for adventures
let fun = 10

// variable for fatigue
let rest = 10


//////////////////////////////////////////////////////////////////////

//FUNCTIONS//

//timer funtions
function handleStartClick(){
    interval = setInterval(function (){
        timer++
        // countEl.textContent = "Count: " + count;
        console.log(timer)
    }, 1000);
}

//



////////////////////////////////////////////////////////////////////////?
 
//EVENT LISTENERS//

// event listener for start button
startEl.addEventListener('click', handleStartClick);


// event listener for hunger button
// feedEl.addEventListener('click', handleFeedClick);


// event listener for adventure button
// advEl.addEventListener('click', handleAdvClick);


// event listener for fatigue button
// sleepEl.addEventListener('click', handleSleepClick);


////////////////////////////////////////////////////////////////////////

// CLASS MORTY//





