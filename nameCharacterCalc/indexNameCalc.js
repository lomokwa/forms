const form = document.querySelector("form");
form.addEventListener("submit",nameCalculator);

function nameCalculator(event) {
  event.preventDefault();
  const firstName = event.target.firstName.value;
  const lastName = event.target.lastName.value;
  const fullName = firstName + lastName;

  document.querySelector("h2").innerText = "Your Name is " + fullName + " Letters Long"
}
