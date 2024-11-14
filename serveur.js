// importer le protocle http 
// require() permet d'importer le package 
// ici le package importé est http
const http = require('http')

const apps = require('./apps');

const numPort = 3002;

// Crée un nouvel objet Date avec l'heure actuelle
const currentDate = new Date; 
// Récupère l'heure au format local
const Time = currentDate.toLocaleTimeString(); 


apps.set("port",numPort);

const server = http.createServer(apps);

server.listen(3002, () => {
    console.log("Il est: ",Time );
    console.log("le serveur est activé au port: ", numPort);
});

// declaration du serveur en utilisant http
// const server = http.createServer((req, res)=> {
    // pour envoyer le message de réponse, 'res' suivi de 'end' 
    //res.end("Bonjour, je suis le serveur.");
//})
// le serveur est disponible sur le port 3000


// localhost signifie le serveur en local 