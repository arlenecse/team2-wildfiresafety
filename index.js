/*** Dark Mode ***
  Purpose:
  - Use this starter code to add a dark mode feature to your website.
***/


// Step 1: Select the theme button
let themeButton = document.getElementById("theme-button");

// Step 2: Write the callback function
const toggleDarkMode = () => {
    // Write your code here
    document.body.classList.toggle("dark-mode");
    // This section will run whenever the button is clicked
}


// Step 3: Register a 'click' event listener for the theme button,
themeButton.addEventListener("click", toggleDarkMode);
//             and tell it to use toggleDarkMode as its callback function

/*** Form Handling ***
  Purpose:
  - When the user submits the form, the name and state they
    entered should be added to the list of participants.
***/

// Step 1: Add your query for the submit RSVP button here
const connectForm = document.getElementById("connect-form");
const participantsList = document.querySelector(".connect-participants");

// Step 2: Write your code to manipulate the DOM here
const addParticipant = (event) => {
  event.preventDefault(); // Prevent form submission (no page reload)

  // Get form values
  const nameInput = document.getElementById("name").value;
  const locationInput = document.getElementById("location").value; // or another field you added

  // Create new participant entry
  const newParticipant = document.createElement("p");
  newParticipant.textContent = `🎟️ ${nameInput} from ${locationInput} has connected.`;

  // Add it to the participants list
  participantsList.appendChild(newParticipant);

  // Optionally: clear form fields after submission
  connectForm.reset();
};

// Step 3: Add a click event listener to the submit RSVP button here
connectForm.addEventListener("submit", addParticipant);


/*** Form Validation [PLACEHOLDER] ***/
/*** Animations [PLACEHOLDER] ***/
/*** Success Modal [PLACEHOLDER] ***/
