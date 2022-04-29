// import functions and grab DOM elements
const ecocityDropdown = document. getElementById('ecoCity-dropdown');
const ecocityEl = document.getElementById('eco');

// let state

// set event listeners 

ecocityDropdown.addEventListener('change', () => {
    ecocityEl.style.backgroundImage = `url('./assets/${ecocityDropdown.value}-eco.jpg')`;
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
