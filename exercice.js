const express = require ("express");
const fs = require("fs");
const url = require("url");
const exercice = express();

// l'endroit ou se situe les vues qui s'affiche sur le navigateur 
exercice.set("views", "./views"); 

// preciser le moteur de lecture de vues a savoir ejs
exercice.set("view engine", "ejs"); 

exercice.use(express.static("controle"));


exercice.get("/", (req, res )=> {

    // Récupère l'heure actuelle
    let date = new Date();
    let salutation ="Bonjour";

if(date.getHours() > 14 ) {
    salutation ="Bonsoir";
}

    utilisateur = {
        nom:["Gazo", "Mali", "LaMala"],
        prenom: ["Moilim"],
        maSalutation: salutation
    };
   res.render("accueil"), utilisateur
    
});

// Definir une route GET pour l'URL "/menus" 
exercice.get("/menus", (req, res )=> {

    food = {
        menus: ["Tripes", "Le special Waouh", "Songes au coco" ]
    }

// rendre la vue "menus" lorsque cette route est accédée avec le tableau food
    res.render("menus"), food 
});

exercice.get("/contact", (req, res )=> {

        res.render("contact");
    
});

exercice.get("/equipe", (req, res )=> {
    equipe = {
        equipe1:["Moilim Gazo - Chef" ,"Bob LaMala - Serveur",
            "Grr Martin - Responsable de salle", "Bébé Gaté - Chef cuisto"]
    }
    res.render("equipe"),equipe

});



/*

// Définir une route pour la méthode GET sur la racine ("/")
exercice.get("/equipe", (req, res) => {
    // Lire le fichier "accueil.html" avec l'encodage "utf-8"
    fs.readFile("equipe.html", "utf-8", (err, data) => {
        // Vérifier s'il y a une erreur lors de la lecture du fichier
        if (err) {
            // Si une erreur se produit, répondre avec un statut 500 (erreur interne du serveur)
            res.writeHead(500, {
                "content-type": "text/html; charset=utf-8"
            });
            res.write("Erreur de lecture du fichier.");
            return res.end();
        }
       
        // Si tout se passe bien, répondre avec un statut 200 (OK)
        res.writeHead(200, {
            "content-type": "text/html; charset=utf-8"
        });
        // Écrire le contenu du fichier dans la réponse
        res.write(data);
        // Terminer la réponse
        res.end();
    });
});




exercice.get("/contact", (req, res )=> {
    fs.readFile( "contact.html", "utf-8", (err, data)=> {       
          res.writeHead(200, {
          "content-type":"text/html;charset=utf-8"});
            res.write(data)

        res.end();
    })
    
});

exercice.get("/menus", (req, res )=> {
    fs.readFile( "menus.html", "utf-8", (err, data)=> {       
          res.writeHead(200, {
          "content-type":"text/html;charset=utf-8"});
            res.write(data)

        res.end();
    })
    
});
*/

module.exports = exercice;