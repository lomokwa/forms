const form = document.querySelector("form");
form.addEventListener("submit",greetignsUser);

function greetignsUser(event) {
  event.preventDefault();
  const fName = event.target.firstName.value;
  const lName = event.target.lastName.value;
  const fullName = fName + " " + lName;
  
  document.querySelector('h2').innerText = "Hello " + fullName + "!";
}