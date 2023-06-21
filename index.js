// Import stylesheets
import './style.css';

const apiKey = 'd0475be3a1967b1b49dfc02c8128001a';
const leCitta = ['Genova', 'Milano', 'Torino', 'Roma', "Firenze", "Tokyo", "Pisa", "San Giovanni Valdarno", "Sapporo", "Helsinki", "Oslo"];
const URL =
  'https://api.openweathermap.org/data/2.5/weather?APPID=' +
  apiKey +
  '&units=metric&q=';
let media = 0;
// Crea una lista di bottoni con i nomi delle città
leCitta.map((citta) => {
  const btn = document.createElement('button');
  btn.innerHTML = citta;
  btn.addEventListener('click', () => display(btn.innerHTML));
  const item = document.createElement('li');
  item.appendChild(btn);
  document.getElementById('citta').appendChild(item);
});


var x = document.createElement("INPUT");
x.setAttribute("type", "text");
x.setAttribute("value", " ");
document.getElementById('row').appendChild(x);

function dinamico(v) {
  const dinamic = document.createElement('button');
  dinamic.innerHTML = v;
  dinamic.addEventListener('click', () => display(dinamic.innerHTML));
  const container = document.createElement('li');
  container.appendChild(dinamic);
  document.getElementById('citta').appendChild(container);

}


let dinbtn = document.createElement('button');
dinbtn.innerHTML = "aggiungi";
dinbtn.addEventListener('click', () => dinamico(x.value))
document.getElementById('din').appendChild(dinbtn);





function display(c) {
  const request = new XMLHttpRequest(); // Costruzione dell’oggetto "request"
  // Funzione callback invocata quando la request termina
  request.onload = () => {
    // funzione definita arrow
    if (request.status === 200) {
      var dataObject = JSON.parse(request.response);
      document.getElementById('risposta').innerHTML =
        new Date().toISOString() +
        ': A ' +
        c +
        ' ci sono ' +
        dataObject.main.temp +
        ' gradi, ' +
        dataObject.main.pressure +
        ' di pressione';
    } else {
      document.getElementById('risposta').innerText = 'Errore';
    }
  };
  // Applico il metodo "open" che prende come parametri:
  request.open('GET', URL + c, true);
  // Applico il metodo send (al termine chiamera’ il callback "onload")
  request.send();
  console.log(new Date().toISOString() + ': Finito:');
  }