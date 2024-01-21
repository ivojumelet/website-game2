// Kies een willekeurig getal tussen 1 en 10
const secretNumber = Math.floor(Math.random() * 10) + 1;

let attempts = 0;

// Functie om de gok te controleren
function checkGuess() {
  // Haal de ingevoerde gok op uit het invoerveld
  const guess = document.getElementById('guess').value;

  // Controleer of er een gok is ingevoerd
  if (guess === '') {
    alert('Voer eerst een getal in!');
    return;
  }

  // Verhoog het aantal pogingen
  attempts++;

  // Haal het element op waar berichten worden weergegeven
  const messageElement = document.getElementById('message');

  // Controleer of de gok overeenkomt met het geheime getal
  if (parseInt(guess) === secretNumber) {
    // Toon een succesbericht als de gok correct is
    messageElement.innerHTML = `Gefeliciteerd! Je hebt het geheime getal ${secretNumber} geraden in ${attempts} pogingen.`;
    messageElement.style.color = 'green';
    // Schakel het invoerveld en de knop uit na een succesvolle gok
    disableInputAndButton();
  } else {
    // Toon een foutbericht en een tip als de gok onjuist is
    const hint = parseInt(guess) < secretNumber ? 'Hoger' : 'Lager';
    messageElement.innerHTML = `Fout! Probeer opnieuw. Tip: ${hint}.`;
    messageElement.style.color = 'red';
  }
}

// Functie om het invoerveld en de knop uit te schakelen na een succesvolle gok
function disableInputAndButton() {
  document.getElementById('guess').disabled = true;
  document.querySelector('button').disabled = true;
}
