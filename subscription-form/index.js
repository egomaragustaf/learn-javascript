const subsFormElement = document.getElementById("subsForm");
const subsFirstNameElement = document.getElementById("firstName");
const subsLastNameElement = document.getElementById("lastName");
const subsEmailElement = document.getElementById("email");
const subsFormOutputElement = document.getElementById("outputValue");

subsFormElement.addEventListener("submit", saveSubscripton);

function saveSubscripton(event) {
  event.preventDefault();

  const firstName = subsFirstNameElement.value;
  const lastName = subsLastNameElement.value;
  const email = subsEmailElement.value;
  const addElementOutput = document.createElement("div");

  subsFormOutputElement.appendChild(addElementOutput);
  addElementOutput.innerText = `Hello ${firstName} ${lastName}! Yout are succcessfully subscribe our newsletter with ${email} email address`;

  const resetButton = document.getElementById("reset");

  resetButton.addEventListener("click", () => {
    addElementOutput.remove();
  });
}
