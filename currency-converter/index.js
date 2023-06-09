const form = document.querySelector("form"); // Grab the form
form.addEventListener("submit", convertUsdToWon); // Listen to submit

function convertUsdToWon(event) {
  event.preventDefault(); // Stop default behaviour
  const usd = Number(event.target.usd.value); // Getting input value
  const won = usd / 0.00078; // Conversion
  document.querySelector("h2").innerText =
    "$" + usd.toLocaleString() + " USD = " + won.toLocaleString() + " KRW."; // Display on page
}
