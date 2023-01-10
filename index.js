const nameElement = document.getElementById('name');
const firstLetterElement = document.getElementById('nameStarter');

const nameInput = window.prompt('Who you gonna call?', 'Saul');
const nameFirstLetter = nameInput.charAt(0).toUpperCase();
const nameRest = nameInput.slice(1).toLowerCase();

firstLetterElement.textContent = nameFirstLetter;
nameElement.childNodes[1].textContent = nameRest;

const audioElement = document.querySelector('#audio');
const playButton = document.querySelector('#play');
const stopButton = document.querySelector('#stop');

playButton.addEventListener('click', () => {
  audioElement.play();
});

stopButton.addEventListener('click', () => {
  audioElement.pause();
  audioElement.currentTime = 0;
});
