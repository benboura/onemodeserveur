// importer le protocle http 
// require() permet d'importer le package 
// ici le package importé est http
const http = require('http')

// declaration du serveur en utilisant http
const server = http.createServer((req, res)=> {
    res.end("Bonjour, je suis le serveur.");
})
// le serveur est disponible sur le port 3000
server.listen(3000);

// localhost signifie le serveur en local 