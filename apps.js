//DOM references//

const startEl = document.getElementById('btn-start');
const feedEl = document.getElementById('btn-feed');
const advEl = document.getElementById('btn-adventure');
const sleepEl = document.getElementById('btn-night');
const countEl = document.getElementById('timer');
const funEl = document.getElementById('fun');
const sustenanceEl = document.getElementById('hunger');
const restEl = document.getElementById('rest');
const namePlate = document.getElementById('mortyName')
const rulesLine = document.getElementById('rules')

let interval = null;


//////////////////////////////////////////////////////////////////////

//VARIABLES//

// variable for start timer
// let timer = 0;

// variable for hunger
// let sustenance = 10;

// variable for adventures
// let fun = 10;

// variable for fatigue
// let rest = 10;


// variable for depletion
let count = 0;

//////////////////////////////////////////////////////////////////////

// CLASS //
class Pet {
    constructor(name){
        this.name = name
        this.sustenance = 100;
        this.fun = 100;
        this.rest = 100;
    }
    handleAdvClick(){

    }
}

const myPet = new Pet();

////////////////////////////////////////////////////////////////////////

//FUNCTIONS//

//timer funtions
function handleStartClick(){
    let answer = prompt('What is your morty\'s name?', 'Morty')
    myPet.name = answer
    namePlate.textContent = myPet.name
    console.log(answer);
    interval = setInterval(function (){
        count++
        if (count % 6 === 0) {
            myPet.fun = myPet.fun - 20
            console.log(`fun - ${myPet.fun}`)
            funEl.textContent = `Entertainment Levels: ${myPet.fun}`;
        }
        if (count % 2 === 0) {
            myPet.sustenance = myPet.sustenance - 15
            console.log(`sustenance - ${myPet.sustenance}`)
            sustenanceEl.textContent = `Sustenance Levels: ${myPet.sustenance}`;
        }
        if (count % 4 === 0) {
            myPet.rest = myPet.rest - 30
            console.log(`Rest - ${myPet.rest}`)
            restEl.textContent = `Rest Levels: ${myPet.rest}`;

        }
        countEl.textContent = "Day #" + count;
    }, 2400);

}  

function gameOver(){
    buttonElement.style.display = NaN
}

function handleAdvClick() {
    myPet.fun = myPet.fun + 15;
    funEl.textContent = `Entertainment Levels: ${myPet.fun}`;
    
}

let overFeedCount = 0;
function handleFeedClick() {
    if (myPet.sustenance >= 100) {
        overFeedCount++
        if (overFeedCount > 3) {
            rulesLine.textContent = 'MORTY EXPLODED (GAME OVER)'
            // if the game ends:
            // stop timers 
            return  gameOver()
            // disable buttons
        } else {
            rulesLine.textContent = 'If you feed him too much he will explode!'
        }
    } else {
        myPet.sustenance = myPet.sustenance + 5;
        rulesLine.textContent = 'Morty be grubbin'
    }
    sustenanceEl.textContent = `Sustenance Levels: ${myPet.sustenance}`;
    console.log(myPet.sustenance)
}


function handleSleepClick() {
    myPet.rest = 100;
    restEl.textContent = `Rest Levels: ${myPet.rest}`;

}

////////////////////////////////////////////////////////////////////////?
 
//EVENT LISTENERS//

// event listener for start button
startEl.addEventListener('click', handleStartClick);


// event listener for hunger button
feedEl.addEventListener('click', handleFeedClick);


// event listener for adventure button
advEl.addEventListener('click', handleAdvClick);


// event listener for fatigue button
sleepEl.addEventListener('click', handleSleepClick);


////////////////////////////////////////////////////////////////////////

// CLASS MORTY//





