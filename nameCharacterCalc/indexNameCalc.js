const form = document.querySelector("form");
form.addEventListener("submit",nameCalculator);

function nameCalculator(event) {
  event.preventDefault();
  const firstName = event.target.firstName.value;
  const lastName = event.target.lastName.value;
  const fullName = firstName + lastName;

  if (fullName.length <= 1) {
    document.querySelector("h2").innerText = "Your Name is " + fullName.length + " Letter Long"
  
  } else {
    document.querySelector("h2").innerText = "Your Name is " + fullName.length + " Letters Long"
    
  }

}
