const form = document.getElementById('form');
const generatorInput = document.getElementById('generator');
const guessInput = document.getElementById('guess');
const choice = document.querySelector('#result p:first-child');
const result = document.querySelector('#result p:last-child');
const VALUE_KEY = 'number';

function onFormSubmit(event) {
  event.preventDefault();
  const generatedValue = parseInt(generatorInput.value);
  localStorage.setItem(VALUE_KEY, generatedValue);
  const selectedValue = parseInt(guessInput.value);
  const savedValue = localStorage.getItem(VALUE_KEY);
  const randomValue = Math.round(Math.random() * savedValue);
  choice.innerText = `You chose: ${selectedValue}, the machine chose: ${randomValue}.`;
  selectedValue === randomValue
    ? (result.innerText = 'You won!')
    : (result.innerText = 'You lost!');
}

form.addEventListener('submit', onFormSubmit);
