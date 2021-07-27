//DOM references//
const foodEl = document.querySelector('#btn-feed');
const advenEl = document.querySelector('#btn-adventure');
const sleptEl = document.querySelector('#btn-night');
const btnsEl = document.querySelector('#maintenance')
const btnsEvl = document.querySelector('#evolutions')
const btnsAcs = document.querySelector('#accessories')
const room = document.querySelector('.rectangle-left')

const upgrades = document.getElementById('upgradeText');
const evolEl = document.getElementById('evolutions');
const accssEl = document.getElementById('accessories');
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
let intervalUpPts = null;
let upPts = null;
let evolutionStage = 0;
let accessorieStage = 0;



//////////////////////////////////////////////////////////////////////

//VARIABLES//

// variable for depletion

//////////////////////////////////////////////////////////////////////

// CLASS //
class Pet {
    constructor(name) {
        this.name = name
        this.sustenance = 100;
        this.fun = 100;
        this.rest = 100;
    }
    fedQuote() {
        let feedQuote = [`You fed ${this.name} some eyeholes`, `${this.name} be grubbin those eyeholes`];
        let randomFamQuote = feedQuote[Math.floor(Math.random() * feedQuote.length)];
        return randomFamQuote
    }
    starveLoss() {
        let famineQuote = [`You starved ${this.name} to death (GAME OVER)`, `${this.name} died of famine (GAME OVER)`, `${this.name} starved to death you absolute Morty! (GAME OVER)`];
        let randomFamOver = famineQuote[Math.floor(Math.random() * famineQuote.length)];
        return randomFamOver
    }
    overFedLoss() {
        let overFedQuote = [`You forcefed ${this.name} until he exploded (GAME OVER)`, `The eyeholes man found ${this.name} (GAME OVER)`, `I told you not to overdo it with the eyeholes (GAME OVER)`]
        let gluttonQuote = overFedQuote[Math.floor(Math.random() * overFedQuote.length)];
        return gluttonQuote
    }
    advQuote() {
        let funQuote = [`You took ${this.name} adventuring`, `You watched some trandimensional TV with ${this}`, `${this.name} went for a walk`];
        let randomFunQuote = funQuote[Math.floor(Math.random() * funQuote.length)];
        return randomFunQuote
    }
    boredLoss() {
        let boredomQuote = [`You bored ${this.name} to death (GAME OVER)`, `${this.name} was neglected to death (GAME OVER)`];
        let randomBorOver = boredomQuote[Math.floor(Math.random() * boredomQuote.length)];
        return randomBorOver
    }
    recklessLoss() {
        let overAdventureQuote = [`${this.name} failed their first solo mission (GAME OVER)`, `${this.name} got absducted by the council of Ricks (GAME OVER)`, `You gave ${this.name} too much freedom and they ran away (GAME OVER)`]
        let recklessQuote = overAdventureQuote[Math.floor(Math.random() * overAdventureQuote.length)];
        return recklessQuote
    }
    sleepQuote() {
        let sleepQuote = [`${this.name} went to sleep`, `A little chloroform won't hurt ${this.name}`, `You put ${this.name} to sleep`];
        let randomSleepQuote = sleepQuote[Math.floor(Math.random() * sleepQuote.length)];
        return randomSleepQuote
    }
    insomniaLoss() {
        let insomniaQuote = [`You worked ${this.name} to death (GAME OVER)`, `${this.name} did not survive the Russian sleep experiment (GAME OVER)`];
        let randomInsOver = insomniaQuote[Math.floor(Math.random() * insomniaQuote.length)];
        return randomInsOver
    }
    sleepLoss() {
        let overSleepQuote = [`Scary Terry tore out ${this.name}'s entrails`, `${this.name}'s demons caught up to him in his sleep`]
        let dreamQuote = overSleepQuote[Math.floor(Math.random() * overSleepQuote.length)];
        return dreamQuote
    }
}

// const myPet = new Pet();
// console.log(myPet)

let myPet = {};


////////////////////////////////////////////////////////////////////////

//FUNCTIONS//

//timer funtions
function handleStartClick() {
    let answer = prompt('What is your morty\'s name?', 'Morty')
    if (answer.length > 0) {
        advenEl.style.visibility = ('visible');
        foodEl.style.visibility = ('visible');
        sleptEl.style.visibility = ('visible');
        evolEl.style.visibility = ('hidden');
        accssEl.style.visibility = ('hidden');
        room.style.backgroundImage = 'url(Images/morty-derp-face.png), url(images/Mortys_room_awake.jpeg)'
        room.style.backgroundPosition = '-8px 60px, 0px'
        room.style.backgroundSize = '300px, cover'
        rulesLine.textContent = 'This is where the rules appear';
        rulesLine.style.visibility = ('visible');
        clearInterval(evolutionStage);
        clearInterval(accessorieStage);
        clearInterval(intervalUpPts);
        clearInterval(interval);
        clearInterval(count);
        clearInterval(recklessCount);
        clearInterval(overFeedCount);
        clearInterval(overSleepCount);
        myPet = new Pet(answer);
    }
    upgrades.textContent = `Upgrade Pts:`
    countEl.textContent = 'Lifespan';
    myPet.name = answer
    namePlate.textContent = `Battery ID: ${myPet.name}`
    console.log(answer);
    if (myPet.fun <= 100 && myPet.sustenance <= 100 && myPet.rest <= 100) {
        myPet.rest = 100;
        myPet.sustenance = 100;
        myPet.fun = 100;
        evolutionStage = 0;
        accessorieStage = 0;
        count = null;
        upPts = null;
        interval = null;
        upgrades.textContent = `Upgrade Pts: `
        funEl.textContent = `Entertainment Levels: ${myPet.fun}`;
        sustenanceEl.textContent = `Sustenance Levels: ${myPet.sustenance}`;
        restEl.textContent = `Rest Levels: ${myPet.rest}`;
    }

    interval = setInterval(function () {
        count++
        if (count % 6 === 0) {
            myPet.fun = myPet.fun - 20
            // console.log(`fun - ${myPet.fun}`)
            funEl.textContent = `Entertainment Levels: ${myPet.fun}`;
        }
        if (count % 2 === 0) {
            myPet.sustenance = myPet.sustenance - 15
            // console.log(`sustenance - ${myPet.sustenance}`)
            sustenanceEl.textContent = `Sustenance Levels: ${myPet.sustenance}`;
        }
        if (count % 4 === 0) {
            myPet.rest = myPet.rest - 30
            // console.log(`Rest - ${myPet.rest}`)
            restEl.textContent = `Rest Levels: ${myPet.rest}`;
        }
        if (myPet.sustenance <= 0) {
            rulesLine.textContent = myPet.starveLoss();
            gameOver()
        } else if (myPet.fun <= 0) {
            rulesLine.textContent = myPet.boredLoss();
            gameOver()
        } else if (myPet.rest <= 0) {
            rulesLine.textContent = myPet.insomniaLoss();
            gameOver()
        }
        // console.log("Day: " + count)
        countEl.textContent = "Day # " + count;
    }
        , 2400);

    intervalUpPts = setInterval(function () {
        upPts++
        if (upPts <= 0) {
            btnsEvl.style.visibility = ('hidden');
            btnsAcs.style.visibility = ('hidden');
        }
        if (upPts >= 60) {
            btnsEvl.style.visibility = ('visible');
        }
        if (upPts >= 30) {
            btnsAcs.style.visibility = ('visible');
        }
        if (upPts < 30){
            btnsAcs.style.visibility = ('hidden');
        }
        if (upPts < 60){
            btnsEvl.style.visibility = ('hidden');
        }
        upgrades.textContent = `Upgrade Pts: ${upPts}`
        if (evolutionStage == 2){
            btnsEvl.style.visibility = ('hidden');
        }
        if (accessorieStage == 3){
            btnsAcs.style.visibility = ('hidden');
        }
        if (evolutionStage == 2 && accessorieStage == 3) {
            upgrades.textContent = `You're squanched out homie!`
            btnsEvl.style.visibility = ('hidden');
            btnsAcs.style.visibility = ('hidden');
        }
    }
        , 100)
}

function gameOver() {
    advenEl.style.visibility = ('hidden');
    foodEl.style.visibility = ('hidden');
    sleptEl.style.visibility = ('hidden');
    btnsEvl.style.visibility = ('hidden');
    btnsAcs.style.visibility = ('hidden');
    rulesLine.style.visibility = ('visible');
    clearInterval(intervalUpPts);
    clearInterval(evolutionStage);
    clearInterval(accessorieStage);
    clearInterval(interval);
    clearInterval(recklessCount);
    clearInterval(overFeedCount);
    clearInterval(overSleepCount);
}

function handleAdvClick() {
    if (myPet.fun >= 100) {
        recklessCount++
        if (recklessCount > 3) {
            rulesLine.textContent = myPet.recklessLoss();
            rulesLine.style.visibility = 'visible'
            return gameOver();
        } else {
            rulesLine.textContent = `${myPet.name} is getting cocky in his adventures! He needs to stop for a bit`
            rulesLine.style.visibility = 'visible'

        }
    } else {

        myPet.fun = myPet.fun + 20;
        myPet.sustenance = myPet.sustenance - 5;
        myPet.rest = myPet.rest - 7;
        rulesLine.textContent = myPet.advQuote();
        rulesLine.style.visibility = 'visible'
    }

    funEl.textContent = `Entertainment Levels: ${myPet.fun}`;
    sustenanceEl.textContent = `Sustenance Levels: ${myPet.sustenance}`;
    restEl.textContent = `Rest Levels: ${myPet.rest}`;    // console.log(myPet.fun)

}

function handleFeedClick() {
    if (myPet.sustenance >= 100) {
        overFeedCount++
        if (overFeedCount > 3) {
            rulesLine.textContent = myPet.overFedLoss();
            rulesLine.style.visibility = 'visible'

            // if the game ends:
            // stop timers 
            return gameOver();
            // disable buttons
        } else {
            rulesLine.textContent = `You're feeding ${myPet.name} too much`
            rulesLine.style.visibility = 'visible'
        }
    } else {
        myPet.sustenance = myPet.sustenance + 5;
        myPet.rest = myPet.rest - 5;
        myPet.fun = myPet.fun - 2;
        rulesLine.textContent = myPet.fedQuote();
        rulesLine.style.visibility = 'visible'

    }
    funEl.textContent = `Entertainment Levels: ${myPet.fun}`;
    sustenanceEl.textContent = `Sustenance Levels: ${myPet.sustenance}`;
    restEl.textContent = `Rest Levels: ${myPet.rest}`;

    rulesLine.style.visibility = 'visible'

    // console.log(myPet.sustenance)
}

function handleSleepClick() {
    if (myPet.rest >= 100) {
        overSleepCount++
        if (overSleepCount > 1) {
            rulesLine.textContent = myPet.sleepLoss();
            rulesLine.style.visibility = 'visible'
            return gameOver();
        } else {
            rulesLine.textContent = `If ${myPet.name} sleeps too much, Scary Terry will appear in his dreams!`
            rulesLine.style.visibility = 'visible'
        }
    } else {
        myPet.rest = 100;
        myPet.fun = myPet.fun - 5;
        myPet.sustenance = myPet.sustenance - 2;
        rulesLine.textContent = myPet.sleepQuote();
        rulesLine.style.visibility = 'visible'
    }
    funEl.textContent = `Entertainment Levels: ${myPet.fun}`;
    sustenanceEl.textContent = `Sustenance Levels: ${myPet.sustenance}`;
    restEl.textContent = `Rest Levels: ${myPet.rest}`;
    rulesLine.style.visibility = 'visible'
    // console.log(myPet.rest)
}


function handleEvolveClick(event) {
    console.log(event.target)
    if (upPts >= 60) {
        upPts = upPts - 60;
        rulesLine.textContent = `${myPet.name} has changed...`
        rulesLine.style.visibility = 'visible'
        if (evolutionStage == 0 && accessorieStage == 0) {
            evolutionStage++
            room.style.backgroundImage = 'url(Images/big-morty.png), url(images/Mortys_room_awake.jpeg)'
            room.style.backgroundPosition = '-8px 60px, 0px'
        } else if (evolutionStage == 0 && accessorieStage == 1) {
            evolutionStage++
            room.style.backgroundImage = 'url(Images/big-morty.png), url(Images/accessory_1.png), url(Images/Mortys_room_awake.jpeg)'
            room.style.backgroundPosition = '-8px 60px, 600px 320px, 0px'
            room.style.backgroundSize = '300px, 50px, cover'
        } else if (evolutionStage == 0 && accessorieStage == 2) {
            evolutionStage++
            room.style.backgroundImage = 'url(Images/big-morty.png), url(Images/accessory_1.png), url(Images/accessory_2.png), url(Images/Mortys_room_awake.jpeg)'
            room.style.backgroundPosition = '-8px 60px, 600px 320px, 480px 220px, 0px'
            room.style.backgroundSize = '300px, 50px, 100px, cover'
        } else if (evolutionStage == 0 && accessorieStage == 3) {
            evolutionStage++
            room.style.backgroundImage = 'url(Images/big-morty.png), url(Images/accessory_1.png), url(Images/accessory_2.png), url(Images/accessory_3.png), url(Images/Mortys_room_awake.jpeg)'
            room.style.backgroundPosition = '-8px 60px, 600px 320px, 480px 220px, 200px 50px, 0px'
            room.style.backgroundSize = '300px, 50px, 100px, 300px, cover'
        } else if (evolutionStage == 1 && accessorieStage == 0) {
            evolutionStage++
            room.style.backgroundImage = 'url(Images/evil-morty.jpeg), url(images/Mortys_room_awake.jpeg)'
            room.style.backgroundPosition = '-8px 60px, 0px'
        } else if (evolutionStage == 1 && accessorieStage == 1) {
            evolutionStage++
            room.style.backgroundImage = 'url(Images/evil-morty.jpeg), url(Images/accessory_1.png), url(Images/Mortys_room_awake.jpeg)'
            room.style.backgroundPosition = '-8px 60px, 600px 320px, 0px'
            room.style.backgroundSize = '300px, 50px, cover'
        } else if (evolutionStage == 1 && accessorieStage == 2) {
            evolutionStage++
            room.style.backgroundImage = 'url(Images/evil-morty.jpeg), url(Images/accessory_1.png), url(Images/accessory_2.png), url(Images/Mortys_room_awake.jpeg)'
            room.style.backgroundPosition = '-8px 60px, 600px 320px, 480px 220px, 0px'
            room.style.backgroundSize = '300px, 50px, 100px, cover'
        } else if (evolutionStage == 1 && accessorieStage == 3) {
            evolutionStage++
            room.style.backgroundImage = 'url(Images/evil-morty.jpeg), url(Images/accessory_1.png), url(Images/accessory_2.png), url(Images/accessory_3.png), url(Images/Mortys_room_awake.jpeg)'
            room.style.backgroundPosition = '-8px 60px, 600px 320px, 480px 220px, 200px 50px, 0px'
            room.style.backgroundSize = '300px, 50px, 100px, 300px, cover'
        }
    }
    if (upPts < 60) {
        btnsEvl.style.visibility = 'hidden';
    }
    if (upPts < 30) {
        btnsAcs.style.visibility = 'hidden'
    }
}

function handleAccessorizeClick(event) {
    console.log(event.target)
    if (upPts >= 30) {
        upPts = upPts - 30;
        rulesLine.textContent = `You decied to give ${myPet.name} a present`
        rulesLine.style.visibility = 'visible'
        if (accessorieStage == 0 && evolutionStage == 0) {
            accessorieStage++
            room.style.backgroundImage = 'url(Images/morty-derp-face.png), url(Images/accessory_1.png), url(Images/Mortys_room_awake.jpeg)'
            room.style.backgroundPosition = '-8px 60px, 600px 320px, 0px'
            room.style.backgroundSize = '300px, 50px, cover'
        } else if (accessorieStage == 0 && evolutionStage == 1) {
            accessorieStage++
            room.style.backgroundImage = 'url(Images/big-morty.png), url(Images/accessory_1.png), url(Images/Mortys_room_awake.jpeg)'
            room.style.backgroundPosition = '-8px 60px, 600px 320px, 0px'
            room.style.backgroundSize = '300px, 50px, cover'
        } else if (accessorieStage == 0 && evolutionStage == 2) {
            accessorieStage++
            room.style.backgroundImage = 'url(Images/evil-morty.jpeg), url(Images/accessory_1.png), url(Images/Mortys_room_awake.jpeg)'
            room.style.backgroundPosition = '-8px 60px, 600px 320px, 0px'
            room.style.backgroundSize = '300px, 50px, cover'
        } else if (accessorieStage == 1 && evolutionStage == 0) {
            accessorieStage++
            room.style.backgroundImage = 'url(Images/morty-derp-face.png), url(Images/accessory_1.png), url(Images/accessory_2.png), url(Images/Mortys_room_awake.jpeg)'
            room.style.backgroundPosition = '-8px 60px, 600px 320px, 480px 220px , 0px'
            room.style.backgroundSize = '300px, 50px, 100px , cover'
        } else if (accessorieStage == 1 && evolutionStage == 1) {
            accessorieStage++
            room.style.backgroundImage = 'url(Images/big-morty.png), url(Images/accessory_1.png), url(Images/accessory_2.png), url(Images/Mortys_room_awake.jpeg)'
            room.style.backgroundPosition = '-8px 60px, 600px 320px, 480px 220px , 0px'
            room.style.backgroundSize = '300px, 50px, 100px , cover'
        } else if (accessorieStage == 1 && evolutionStage == 2) {
            accessorieStage++
            room.style.backgroundImage = 'url(Images/evil-morty.jpeg), url(Images/accessory_1.png), url(Images/accessory_2.png), url(Images/Mortys_room_awake.jpeg)'
            room.style.backgroundPosition = '-8px 60px, 600px 320px, 480px 220px , 0px'
            room.style.backgroundSize = '300px, 50px, 100px , cover'
        } else if (accessorieStage == 2 && evolutionStage == 0) {
            accessorieStage++
            room.style.backgroundImage = 'url(Images/morty-derp-face.png), url(Images/accessory_1.png), url(Images/accessory_2.png), url(Images/accessory_3.png), url(Images/Mortys_room_awake.jpeg)'
            room.style.backgroundPosition = '-8px 60px, 600px 320px, 480px 220px, 200px 50px, 0px'
            room.style.backgroundSize = '300px, 50px, 100px, 300px, cover'
        } else if (accessorieStage == 2 && evolutionStage == 1) {
            accessorieStage++
            room.style.backgroundImage = 'url(Images/big-morty.png), url(Images/accessory_1.png), url(Images/accessory_2.png), url(Images/accessory_3.png), url(Images/Mortys_room_awake.jpeg)'
            room.style.backgroundPosition = '-8px 60px, 600px 320px, 480px 220px, 200px 50px, 0px'
            room.style.backgroundSize = '300px, 50px, 100px, 300px, cover'
        } else if (accessorieStage == 2 && evolutionStage == 2) {
            accessorieStage++
            room.style.backgroundImage = 'url(Images/evil-morty.jpeg), url(Images/accessory_1.png), url(Images/accessory_2.png), url(Images/accessory_3.png), url(Images/Mortys_room_awake.jpeg)'
            room.style.backgroundPosition = '-8px 60px, 600px 320px, 480px 220px, 200px 50px, 0px'
            room.style.backgroundSize = '300px, 50px, 100px, 300px, cover'
        }
    }
    if (upPts <= 29){
        btnsAcs.style.visibility = 'hidden';
    }
    if (upPts < 60){
        btnsEvl.style.visibility = 'hidden';
    }
}
if (upPts < 30) {
    btnsAcs.style.visibility = 'hidden';
}
if (upPts < 60) {
    btnsEvl.style.visibility = 'hidden';
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

evolEl.addEventListener('click', handleEvolveClick);

accssEl.addEventListener('click', handleAccessorizeClick);

////////////////////////////////////////////////////////////////////////

// CLASS MORTY//


