const form = document.querySelector("form");
form.addEventListener("submit",convertTemp);

function convertTemp(event) {
  event.preventDefault();
  const farH = Number(event.target.fh.value);
  const cels = (farH-32) * 5 / 9;  
  document.querySelector('h2').innerText = farH + "°F is equal to " + cels.toFixed(2) +  "°C.";
 
}

