//we are generating random number
let randomNumber = parseInt(Math.random() * 100 + 1);


let prevguess = [];
let numguess = 1;

let playgame = true;
//console.log(randomNumber)  just for checking
const submit = document.querySelector('#subt');
const guessSlot = document.querySelector('.guesses');
const userinput = document.querySelector('#guessfield');
const remainig = document.querySelector('.lastresult');
const startover = document.querySelector('.resultparas');
const loworhi = document.querySelector('.lowOrhi');
const p = document.createElement('p')
//array storing value

// let prevguess = [];
// let numguess = 1;

// let playgame = true;

if (playgame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        const guess = parseInt(userinput.value);
        console.log(guess)
        validateguess(guess);
    });
}
//funtions
function validateguess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid Number btw 1 to 100');
    }
    else if (guess < 1) {
        alert('Please enter a Number more than 1');
    }
    else if (guess > 100) {
        alert('Please enter a Number less than 100');
    }
    else {
        prevguess.push(guess);
        if (numguess === 11) {
           displayguess(guess);
            displaymessage(`Game Over. Random number was ${randomNumber}`);
            endgame();
        }
        else {
            displayguess(guess);
            checkguess(guess);
        }
    }
}
function checkguess(guess) {
    if (guess === randomNumber) {
        displaymessage(` WOhooo....Congratulations , You guessed it right `)
        endgame();
    } else if (guess < randomNumber) {
        displaymessage(`Number is Tooo Low please try with some greter number`);
    }
    else if (guess > randomNumber) {
        displaymessage(`Number is Too high please try with some smaller number`);
    }
}
function displayguess(guess) {
    userinput.value = '';
    guessSlot.innerHTML += `${guess} , `;
    numguess++;
    remainig.innerHTML = `${11 - numguess} `;

}
function displaymessage(message) {
    loworhi.innerHTML = `<h2>${message}</h2>`;
}

function endgame() {
    userinput.value = '';
    userinput.setAttribute('disabled', '');
    p.classList.add('button');
    
    //p.innerHTML = `<button id="newGame">start new game </button>`;
    p.innerHTML = '';
    //chatgpt
    const newbtn = document.createElement('button');
    newbtn.id = 'newgame';
    newbtn.type = 'button';
    
    newbtn.textContent = 'Start new Game';
    p.appendChild(newbtn)
    startover.appendChild(p);
    playgame = 'false';

    console.log('Endgame : appended Start New button');
    newbtn.addEventListener('click', function (e) {
        e.preventDefault();
        console.log('start new game clicked')
        newgame();

    });
    // startover.appendChild(p);
    // playgame = false;
    // newgame();
}
function newgame() {
    //const newgamebutton = document.querySelector('#newgame');
    //newgamebutton.addEventListener('click', function () {
       // e.preventDefault();
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevguess = [];
        numguess = 1;
        guessSlot.innerHTML = '';
        remainig.innerHTML = `${10 - numguess} `;
        loworhi.innerHTML = '';
        userinput.removeAttribute('disabled');
        if(p.parentNode === startover){
            startover.removeChild(p);
        }
    
        
        playgame = true;
        console.log('game reset. new random number :' , randomNumber);
    };
