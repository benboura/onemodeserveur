// import du framework ExpressJs
//import express from "express";

const express = require ("express");
const url = require("url");
const fs = require("fs"); // le module fs permet de manipuler des fichier 

const apps = express();




//'app.use' pour géneré les requêtes et envoyé le message mentionner vers le client 

  // =====Middlewere====
/*apps.use((req, res, next) => {
   console.log ("votre message a bien été reçue");
    next();
})

apps.use((req, res, next) => {
    res.status (201);
    next();
})

apps.use((req, res,) => {
   
    res.json ({});
    next();
})

apps.use((req, res,) => {
    console.log("Fin de Middlewere");
})
*/





apps.get("/", (req, res )=> {
    // je precise le 
    res.writeHead(200, {
        "content-type":"text/html;charset=utf-8"
    });
    res.write("<b> Salam 👋🏽 à vous </b> ");
    res.end();
});
// route pour l'accueil
apps.get("/accueil", (req, res )=> {
    fs.readFile("base.html", "utf-8", (err, data)=> {
        if(err) {
            res.writeHead(404);
            res.write("le fichier est introuvable");
        } else {
        
          res.writeHead(200, {
          "content-type":"text/html;charset=utf-8"});
            res.write(data);
        }


        res.end();
    })
    
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




// format URL : localhost:3002/api/nom
apps.get("/api/nom", (req, res ) => {
    const monObjet = [{
        nom: "Abou",
        prenom: "Kamal"
    }];

    res.status(200).json(monObjet);
})

// format URL : localhost:3002/api/nom
apps.get("/api/url", (req, res)=>{
    // je retourne une reponse de HTML et de status 200
    res.writeHead(200, {'Content-Type': 'text/html'});

    res.write(req.url); // recupere l'URL passe dans la requete 
    res.end(); // fin du reponse 
})



// format URL : localhost:3002/?annee=2024
/* Exemple https://www.google.com/search?mayotte
Analyse de l'URL :
l'URL de base : https://www.google.com
l'URL complet avec l'API '/search' :  https://www.google.com/search
l'url complet avec des parametres .Les parametres sont precedes par le point d'interrogation '?'
le mot-clé 'q' contient la valeur 'Mayotte'?q=mayotte.

*/

// URL : localhost:3002/param?
apps.get("/param", (req,res)=> {
    res.writeHead(200, {'Content-Type': 'texte/html'})
    
    res.end(req.query.annee + " " + req.query.mois)
    
    // let query = url.parse(req.url, true).query;
    // let = resultatAffiche = query.anne;

    // res.end(resultatAffiche);
})

// partager l'objet 'apps' avec d'autre fichiers
module.exports = apps;

/* app.listen(3001, ()=> {
    console.log("serveur écoute le port 3001");
});
*/