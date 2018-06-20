const express = require ('express');
const request = require('request');
const app = express();


// Nous définissons ici les paramètres du serveur.
var port = 3064;


app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + "/index.html")
})

let apiKey = '368214adc9ba08a2491b6087d7950f49';
// let city = argv.c || 'Ile de la Réunion';
let url = `http://api.openweathermap.org/data/2.5/group?id=524901,6690283,2988507,2995469&units=metric&appid=${apiKey}`

app.get('/test', function (req, res) {

  request(url, function (err, response, body) {
    if (err) {
      console.log('error:', error);
    } else {
      let weather = JSON.parse(body)
      // let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
      console.log(weather);
      res.json(weather)
    }
  });



})


// Démarrer le serveur 
app.listen(port, function () {
  console.log("Mon serveur fonctionne");
});