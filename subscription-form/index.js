const subscribeFormElement = document.getElementById("subscribeForm");
const firstNameElement = document.getElementById("firstName");
const lastNameElement = document.getElementById("lastName");
const emailElement = document.getElementById("email");
const successMessageElement = document.getElementById("successMessage");
const retryButtonElement = document.getElementById("retry");

subscribeFormElement.addEventListener("submit", subscribeEmail);
retryButtonElement.addEventListener("click", retrySubscribe);

function retrySubscribe() {
  subscribeFormElement.reset();
  successMessageElement.innerText = "";
}

function subscribeEmail(event) {
  event.preventDefault();

  const firstName = firstNameElement.value;
  const lastName = lastNameElement.value;
  const email = emailElement.value;

  successMessageElement.innerText = `Hello ${firstName} ${lastName}! Yout are succcessfully subscribe our newsletter with ${email} email address`;
}
