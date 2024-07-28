let random_number = (parseInt(Math.random() * 100 + 1 )); 

const submit = document.querySelector('#subt')
const user_input = document.querySelector('#guessField')
const guess_slot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const start_over = document.querySelector('.resultParas')


const p = document.createElement('p')

let prev_guess = []
let num_guess = 1 

let play_game = true

if(play_game){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(user_input.value)
        validate_guess(guess)
    } )
}

function validate_guess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number !')
    } else if(guess < 1){
        alert('Please enter a number greater than ONE !')
    }else if(guess>100){
        alert('Please enter a number less than 100')
    }else{
        prev_guess.push(guess)
        if(num_guess === 11){
            display_guess(guess)
            display_message(`Game Over. Random number was: ${random_number}`)
            end_game()
        }else{
            display_guess(guess);
            check_guess(guess);
        }
    }
}

function display_guess(guess){
    user_input.value = ''
    guess_slot.innerHTML += `${guess}  `
    num_guess++;
    remaining.innerHTML = `${11 - num_guess}`
}

function check_guess(guess){
    if(guess === random_number){
        display_message("Right Answer ! <3")
        end_game()
    }else if(guess < random_number){
        display_message("Number is TOO LOW !")
    }else if(guess > random_number){
        display_message("Number is TOO HIGH! ")
    }
}


function display_message(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}



function end_game(){
    user_input.value = ''
    user_input.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id = "new_game">Restart Game</h2>`
    start_over.appendChild(p)
    play_game = false
    new_game()
}

function new_game(){
    const newGameButton = document.querySelector('#new_game');
    newGameButton.addEventListener('click', function (e) {
    random_number = parseInt(Math.random() * 100 + 1);
    prev_guess = [];
    num_guess = 1;
    guess_slot.innerHTML = '';
    remaining.innerHTML = `${11 - num_guess} `;
    user_input.removeAttribute('disabled');
    start_over.removeChild(p);

    play_game = true;
  });
}