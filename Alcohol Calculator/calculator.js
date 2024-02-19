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
      }
    }

    const totalDrinks = drinksPerHour * numberOfDrinkers * eventDuration;

    // Calculate drinks based on updated requirements
    const liquorDrinks = totalDrinks * 0.4;
    const beerDrinks = totalDrinks * 0.35;
    const wineDrinks = totalDrinks * 0.25;

    // Calculate bottles and mixers based on drink count
    const handles = Math.ceil(liquorDrinks / 40);
    const fifths = Math.ceil(liquorDrinks / 17);
    const mixersForHandles = handles * 40 * 4; // in ounces for handles
    const mixersForFifths = fifths * 17 * 4; // in ounces for fifths

    // Display results with the new mixers calculation included
    const resultsElement = document.getElementById('results');
    resultsElement.innerHTML = `
      <p>Total Alcoholic Drinks: ${totalDrinks.toFixed(1)}</p>
      <p>Liquor (40%): Handles ${handles}, Fifths ${fifths}, Mixers for Handles ${mixersForHandles} oz, Mixers for Fifths ${mixersForFifths} oz</p>
      <p>Beer (35%): Equivalent to ${Math.ceil(beerDrinks)} cans/bottles</p>
      <p>Wine (25%): Equivalent to ${Math.ceil(wineDrinks / 5)} bottles</p>
    `;

    // After calculations, optionally send details to the chatbot for further interaction
    const detailsMessage = `Based on the input, we will need approximately ${totalDrinks.toFixed(1)} total drinks: ${handles} handles and ${fifths} fifths of liquor with mixers, ${Math.ceil(beerDrinks)} cans/bottles of beer, and ${Math.ceil(wineDrinks / 5)} bottles of wine. Can you help with a cocktail package?`;
    sendMessageToChatbot(detailsMessage);
}

// Function to update slider values
function updateSliderValue(sliderId, valueId) {
    var slider = document.getElementById(sliderId);
    var output = document.getElementById(valueId);
    output.textContent = slider.value; // Update the text content with the slider's value
    slider.oninput = function() {
      output.textContent = this.value;
    };
  }
  
  // Call this function for each slider to initialize the displayed value
  updateSliderValue('people', 'peopleValue');
  updateSliderValue('drinkers', 'drinkersValue');
  updateSliderValue('duration', 'durationValue');
  
  // Placeholder function to simulate sending a message to a chatbot and receiving a response
  function sendMessageToChatbot(message) {
    console.log("Sending message to chatbot:", message);
    // Simulate a delay for the chatbot's response
    setTimeout(() => {
      const response = "Chatbot response to: " + message;
      displayChatbotResponse(response);
    }, 1000);
  }
  
  // Function to display the chatbot's response in the UI
  function displayChatbotResponse(response) {
    const chatbotContainer = document.getElementById("chatbot-container");
    const messageElement = document.createElement("p");
    messageElement.textContent = response;
    chatbotContainer.appendChild(messageElement);
  }
  
  
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
  
    // After calculations, send the details to the chatbot
    const detailsMessage = `I am planning an event for ${numberOfPeople} people, and we will be drinking for ${eventDuration} hours. We are mostly ${drinkerType} drinkers. Based on this, we'll need approximately ${totalDrinks.toFixed(1)} alcoholic drinks. Can you help with a cocktail package?`;
    sendMessageToChatbot(detailsMessage);
  }
  
  // Event listener to call calculateAlcohol when form is submitted
  document.getElementById('alcoholCalculatorForm').addEventListener('submit', function(event) {
    event.preventDefault();
    calculateAlcohol();
  });
  
