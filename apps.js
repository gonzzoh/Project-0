//DOM references//
const foodEl = document.querySelector('#btn-feed');
const advenEl = document.querySelector('#btn-adventure');
const sleptEl = document.querySelector('#btn-night');
const btnsEl = document.querySelector('#maintenance')

const startEl = document.getElementById('btn-start');
const feedEl = document.getElementById('btn-feed');
const advEl = document.getElementById('btn-adventure');
const sleepEl = document.getElementById('btn-night');
const countEl = document.getElementById('timer');
const funEl = document.getElementById('fun');
const sustenanceEl = document.getElementById('sustenance');
const restEl = document.getElementById('rest');
const namePlate = document.getElementById('mortyName')
const rulesLine = document.getElementById('rules')
var buttons = document.querySelector("#maintenance")

let interval = null;
let count = null;
let recklessCount = null;
let overFeedCount = null;
let overSleepCount = null;


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

//////////////////////////////////////////////////////////////////////

// CLASS //
class Pet {
    constructor(name){
        this.name = name
        this.sustenance = 100;
        this.fun = 100;
        this.rest = 100;
    }
}

const myPet = new Pet();

////////////////////////////////////////////////////////////////////////

//FUNCTIONS//

//timer funtions
function handleStartClick(){
    let answer = prompt('What is your morty\'s name?', 'Morty')
    if (answer.length > 0){
        advenEl.style.visibility = ('visible');
        foodEl.style.visibility = ('visible');
        sleptEl.style.visibility = ('visible');
        rulesLine.textContent = 'This is where the rules appear'
        rulesLine.style.visibility = ('hidden');
        clearInterval(interval);
        clearInterval(recklessCount);
        clearInterval(overFeedCount);
        clearInterval(overSleepCount);
    } 

    countEl.textContent = 'Lifespan';
    myPet.name = answer
    namePlate.textContent = `Morty ID: ${myPet.name}`
    console.log(answer);
        if (myPet.fun <= 100 && myPet.sustenance <= 100 && myPet.rest <= 100){
            myPet.rest = 100;
            myPet.sustenance = 100;
            myPet.fun = 100;
            count = null;
            funEl.textContent = `Entertainment Levels: ${myPet.fun}`;
            sustenanceEl.textContent = `Sustenance Levels: ${myPet.sustenance}`;
            restEl.textContent = `Rest Levels: ${myPet.rest}`;
    }
 
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
        if (myPet.sustenance <=0){
            rulesLine.textContent = `You starved ${myPet.name} to death.`
            gameOver()
        } else if (myPet.fun <=0){
            rulesLine.textContent = `You bored ${myPet.name} to death.`
            gameOver()
        } else if (myPet.rest <=0){
            rulesLine.textContent = `You worked ${myPet.name} to death.`
            gameOver()
        }
        console.log("Day: " + count)
        countEl.textContent = "Day # " + count;
    }, 2400);

}  

function gameOver(){
    advenEl.style.visibility = ('hidden');
    foodEl.style.visibility = ('hidden');
    sleptEl.style.visibility = ('hidden');
    btnsEl.style.visibility = ('hidden');
    rulesLine.style.visibility = ('visible');
    clearInterval(interval)
    clearInterval(recklessCount)
    clearInterval(overFeedCount)
    clearInterval(overSleepCount)
}

function handleAdvClick(){
    if (myPet.fun >= 100){
        recklessCount++
        if (recklessCount > 3){
            rulesLine.textContent = `${myPet.name} got too reckless!! (GAME OVER)`;
            rulesLine.style.visibility = 'visible'
            return gameOver();
        } else {
            rulesLine.textContent = `${myPet.name} is getting cocky in his adventures! He needs to stop for a bit`
            rulesLine.style.visibility = 'visible'

        }
    } else {

        myPet.fun = myPet.fun + 15;
        rulesLine.textContent = `Rick and ${myPet.name} went adventuring!`   
        rulesLine.style.visibility = 'visible'
    }

    funEl.textContent = `Entertainment Levels: ${myPet.fun}`;
    // console.log(myPet.fun)
    
}

function handleFeedClick() {
    if (myPet.sustenance >= 100){
        overFeedCount++
        if (overFeedCount > 3){
            rulesLine.textContent = `${myPet.name} exploded!! (GAME OVER)`;
            rulesLine.style.visibility = 'visible'

            // if the game ends:
            // stop timers 
            return  gameOver();
            // disable buttons
        } else {
            rulesLine.textContent = `If you feed ${myPet.name} too much he will explode!`
            rulesLine.style.visibility = 'visible'
        }
    } else {
        myPet.sustenance = myPet.sustenance + 5;
        rulesLine.textContent = `${myPet.name} be grubbin`
        rulesLine.style.visibility = 'visible'

    }
    sustenanceEl.textContent = `Sustenance Levels: ${myPet.sustenance}`;
    rulesLine.style.visibility = 'visible'

    // console.log(myPet.sustenance)
}

function handleSleepClick(){
    if (myPet.rest >= 100){
            overSleepCount++
            if (overSleepCount > 1) {
            rulesLine.textContent = `Scary Terry quenched his bloodlust with ${myPet.name}'s life!! (GAME OVER)`
            rulesLine.style.visibility = 'visible'
            return gameOver();
        } else {
            rulesLine.textContent = `If ${myPet.name} sleeps too much, Scary Terry will appear in his dreams!`
            rulesLine.style.visibility = 'visible'
        } 
    } else {
        myPet.rest = 100;
        rulesLine.textContent = `${myPet.name} is sleeping like a baby`
        rulesLine.style.visibility = 'visible'
    }
    restEl.textContent = `Rest Levels: ${myPet.rest}`;
    rulesLine.style.visibility = 'visible'
    // console.log(myPet.rest)
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


