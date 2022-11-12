const nameElement = document.getElementById('name');
const firstLetterElement = document.getElementById('nameStarter');

const nameInput = window.prompt('Who you gonna call?', 'Saul');
const nameFirstLetter = nameInput.charAt(0).toUpperCase();
const nameRest = nameInput.slice(1).toLowerCase();

firstLetterElement.textContent = nameFirstLetter;
nameElement.childNodes[1].textContent = nameRest;
