// import du framework ExpressJs
//import express from "express";

const express = require ("express");


const apps = express();


//'app.use' pour géneré les requêtes et envoyé le message mentionner vers le client 
/*apps.use((req, res) => {
    res.json({message : "votre message a bien été reçue"});
})*/

apps.get("/", (req, res )=> {
    res.end("Salam, ");
});
// route pour l'accueil
apps.get("/accueil", (req, res )=> {
    res.end("c'est ici l'accueil !!");
});

// route pour apropos
apps.get("/apropos", (req, res )=> {
    res.end("A bons port sur apropos !!");
});

// route pour services 
apps.get("/services", (req, res )=> {
    res.end(" welcom to service  !!");
});

// route pour contacts 
apps.get("/contacts", (req, res )=> {
    res.end("Directement par mail ou par tel, on repond spontanement !!!");
});


// methode de route avec post; put; et delete .


// j'ai configurer une route qui répond aux requetes POST  
apps.post("/services", (req, res )=> {
    res.end(" welcom to service  !!");
});

apps.put("/services", (req, res )=> {
    res.end(" welcom to service  !!");
});

apps.delete("/services", (req, res )=> {
    res.end(" welcom to service  !!");
});







// partager l'objet 'apps' avec d'autre fichiers
module.exports = apps;

/* app.listen(3001, ()=> {
    console.log("serveur écoute le port 3001");
});
*/