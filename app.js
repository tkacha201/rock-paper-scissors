const choices = ['rock', 'paper', 'scissors'];
const results = {
  'rock': {'rock': "It's a draw!", 'paper': 'You lost!', 'scissors': 'You won!'},
  'paper': {'rock': 'You won!', 'paper': "It's a draw!", 'scissors': 'You lost!'},
  'scissors': {'rock': 'You lost!', 'paper': 'You won!', 'scissors': "It's a draw!"}
};

const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');

let userChoice;
let computerChoice;

possibleChoices.forEach(choice => choice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    displayResult();
}));

const generateComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    computerChoice = choices[randomIndex];
    computerChoiceDisplay.innerHTML = computerChoice;
}

const displayResult = () => {
    const result = results[userChoice][computerChoice];
    resultDisplay.innerHTML = result;
}
