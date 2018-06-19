
const request = require('request');
const argv = require('yargs').argv;

// Nous définissons ici les paramètres du serveur.
var hostname = 'localhost'; 
var port = 3064; 
 
var app = request(); 
 
// Démarrer le serveur 
app.listen(port, hostname, function(){
	console.log("Mon serveur fonctionne sur http://"+ hostname +":"+port+"\n"); 
});
 

let apiKey = '368214adc9ba08a2491b6087d7950f49';
let city = argv.c || 'Ile de la Réunion';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    let weather = JSON.parse(body)
    let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
    console.log(message);
  }
});

