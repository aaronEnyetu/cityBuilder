// import functions and grab DOM elements
const ecocityDropdown = document. getElementById('ecoCity-dropdown');
const ecocityEl = document.getElementById('eco');

const futurecityDropdown = document. getElementById('futureCity-dropdown');
const futurecityEl = document.getElementById('future');

const capitalcityDropdown = document.getElementById('capitalCity-dropdown');
const capitalcityEl = document.getElementById('capital');

const reportEl = document.getElementById('report');

const sloganphraseInput = document.getElementById('slogan-input');
const sloganphraseButton = document.getElementById('slogan-button');
// let state

let sloganphrases = [];
let ecoSmartCount = 0;
let futureCount = 0;
let capitalCount = 0;

// set event listeners 

ecocityDropdown.addEventListener('change', () => {
    ecocityEl.style.backgroundImage = `url('./assets/${ecocityDropdown.value}-eco.jpg')`;
    //increment the eco-city change count state
    ecoSmartCount++;
    displayStats();
});

futurecityDropdown.addEventListener('change', () => {
    futurecityEl.style.backgroundImage = `url('./assets/${futurecityDropdown.value}-future.jpg')`;
    //increment the future city change count state
    futureCount++;
    displayStats();

});

capitalcityDropdown.addEventListener('change', () => {
    capitalcityEl.style.backgroundImage = `url('./assets/${capitalcityDropdown.value}-capital.jpg')`;
    //increment the future city change count state
    capitalCount++;
    displayStats();
});
  // get user input

function displayStats() {
    //text content of the report to show user how many times each feature has been changed
    reportEl.textContent = `You have changed the Eco-Smart city ${ecoSmartCount} times, the Futuristic city ${futureCount} times, and the Capital ${capitalCount} times`;
}
  // use user input to update state 
  // update DOM to reflect the new state

sloganphraseButton.addEventListener('click', () => {
//get the value of the slogan input
//push the new slogan to the slogan phrase array
    sloganphrases.push(sloganphraseInput.value);
    console.log(sloganphrases);
    displaySloganPhrases();

});

function displaySloganPhrases() {

    const sloganphraseList = document.getElementById('slogan-list');
    sloganphraseList.textContent = '';
    for (let slogan of sloganphrases) {
        const li = document.createElement('li');
        li.textContent = slogan;
      //appending the HTML element to the cleared-out DOM
        sloganphraseList.append(li);
    }
}



