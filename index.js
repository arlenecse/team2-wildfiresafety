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

/*** Form Handling [PLACEHOLDER] ***/
const form = document.getElementById("connect-form");
const participantsDiv = document.querySelector(".connect-participants");
const countElement = document.getElementById("connect-count");

form.addEventListener("submit", (event) => {event.preventDefault();});

let nameInput = document.getElementById("name").value;
let stateInput = document.getElementById("state").value;

if (nameInput && stateInput) {
    let newParticipant = document.createElement("p");
    newParticipant.textContent = `⭐ ${nameInput} from ${stateInput} is joining the crew.`;
    participantsDiv.appendChild(newParticipant);
    count = count +1;
    countElement.textContent =  "⭐" + count + " people have RSVP'd to this event!"
;

/*** Form Validation [PLACEHOLDER] ***/
/*** Animations [PLACEHOLDER] ***/
/*** Success Modal [PLACEHOLDER] ***/
