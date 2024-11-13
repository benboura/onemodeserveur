// importer le protocle http 
// require() permet d'importer le package 
// ici le package importé est http
const http = require('http')

// const app = require("./app");

// app.set("port",3000);


// const server1 = createServer(app);

// declaration du serveur en utilisant http
const server = http.createServer((req, res)=> {
    // pour envoyer le message de réponse, 'res' suivi de 'end' 
    res.end("Bonjour, je suis le serveur.");
})
// le serveur est disponible sur le port 3000
server.listen(3000);

// localhost signifie le serveur en local 