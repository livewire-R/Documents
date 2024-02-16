// Function to update slider values
function updateSliderValue(sliderId, valueId) {
  var slider = document.getElementById(sliderId);
  var output = document.getElementById(valueId);
  output.textContent = slider.value; // Update the text content with the slider's value
  slider.oninput = function() {
      output.textContent = this.value;
  }
}

// Call this function for each slider to initialize the displayed value
updateSliderValue('people', 'peopleValue');
updateSliderValue('drinkers', 'drinkersValue');
updateSliderValue('duration', 'durationValue');

// The main function to calculate the alcohol needed
function calculateAlcohol() {
  const numberOfPeople = parseInt(document.getElementById('people').value);
  const numberOfDrinkers = parseInt(document.getElementById('drinkers').value);
  const eventDuration = parseInt(document.getElementById('duration').value);
  const drinkerType = document.getElementById('drinkerType').value;

  let drinksPerHour;
  if (drinkerType === 'chill') {
      drinksPerHour = 0.75;
  } else if (drinkerType === 'responsiblyturnt') {
      drinksPerHour = 1.0;
  } else { // dedicatedpartiers
      drinksPerHour = 2.0; // 2 drinks in the first hour
      if (eventDuration > 1) {
          drinksPerHour += (eventDuration - 1) * 1.5; // 1.5 drinks for the remaining hours
          drinksPerHour /= eventDuration; // Average per hour
      }
  }

  const totalDrinks = drinksPerHour * numberOfDrinkers * eventDuration;

  // Assuming all three types of drinks are served, you can adjust these ratios if needed
  const liquorDrinks = totalDrinks * 0.4;
  const beerDrinks = totalDrinks * 0.35;
  const wineDrinks = totalDrinks * 0.25;

  // Calculate bottles based on drink count
  const handles = Math.ceil(liquorDrinks / 40);
  const fifths = Math.ceil(liquorDrinks / 17);

  // Calculate mixers if liquor is served
  const mixersForHandles = handles * 40 * 4; // in ounces
  const mixersForFifths = fifths * 17 * 4; // in ounces

  // Display results
  const resultsElement = document.getElementById('results');
  resultsElement.innerHTML = `
      <p>Total Alcoholic Drinks: ${totalDrinks.toFixed(1)}</p>
      <p>Total Number of Wine Bottles: ${Math.ceil(wineDrinks / 5)}</p> <!-- Assuming 5 drinks per bottle -->
      <p>Number of Beer Cans: ${Math.ceil(beerDrinks)}</p> <!-- Assuming 1 drink per can -->
      <p>Number of Liquor Bottles:</p>
      <ul>
          <li>Handles: ${handles}</li>
          <li>Fifths: ${fifths}</li>
      </ul>
      <p>Mixers:</p>
      <ul>
          <li>For Handles: ${mixersForHandles} oz</li>
          <li>For Fifths: ${mixersForFifths} oz</li>
      </ul>
  `;
}

// Event listener to call calculateAlcohol when form is submitted
document.getElementById('alcoholCalculatorForm').addEventListener('submit', function(event) {
  event.preventDefault();
  calculateAlcohol();
});
