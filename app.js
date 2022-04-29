// import functions and grab DOM elements
const ecocityDropdown = document. getElementById('ecoCity-dropdown');
const ecocityEl = document.getElementById('eco');

const futurecityDropdown = document. getElementById('futureCity-dropdown');
const futurecityEl = document.getElementById('future');

const capitalcityDropdown = document.getElementById('capitalCity-dropdown');
const capitalcityEl = document.getElementById('capital');
// let state

// set event listeners 

ecocityDropdown.addEventListener('change', () => {
    ecocityEl.style.backgroundImage = `url('./assets/${ecocityDropdown.value}-eco.jpg')`;
});

futurecityDropdown.addEventListener('change', () => {
    futurecityEl.style.backgroundImage = `url('./assets/${futurecityDropdown.value}-future.jpg')`;

});

capitalcityDropdown.addEventListener('change', () => {
    capitalcityEl.style.backgroundImage = `url('./assets/${capitalcityDropdown.value}-capital.jpg')`;
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
