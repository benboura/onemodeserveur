const express = require ("express");
const fs = require("fs");
const url = require("url");
const exercice = express();
const mysql2 = require("mysql2")
const myconnection = require("express-myconnection");
const { error } = require("console");


const connection = {
    host: "localhost",
    user: "root",
    password: "Benraphael@1",
    port: 3306,
    database: "restaubase"
};

exercice.use(myconnection(mysql2, connection, "pool"));

// Middlewer de connection à la base données
//'Pool' est la stratégie de connection à la base de données 


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
 res.render("/"), utilisateur

});

// Definir une route GET pour l'URL "/menus" 
exercice.get("/menus", (req, res )=> {

   req.getConnection((error, connection)=>{
    if(error) {
        console.log(error);
    }else {
        connection.query("SELECT * FROM plats;", (err, resultat)=> {
            if (err) {
                console.log(err);
            }else{
                console.log("resultat : " + resultat);
                res.render("menus", {resultat});
            }
        });
    }
   })
   
 
});

// créer une route avec la methode DELETE
// localhost:3004/plat/1, le chiffre 1 correspond à l'id du plat à supprimer 
exercice.delete("/plats/:id",(req, res)=>{
let platId = req.params.id ;  // récupere 

req.getConnection((erreur, connection)=> {
    if (erreur) {
        console.log(erreur);
    }else {
        connection.query("DELETE FROM plats WHERE id = ?", 
            [platId], (err, result)=> {
                if(err) {
                    console.log(err);
                }else {
                    console.log("suppression reussie")
                    res.status(200).json({routeRacine: "/"});
                }
            });
    }
});
});



exercice.get("/contact", (req, res )=> {

        res.render("contact");
    
});

exercice.get("/equipe", (req, res )=> {
    equipe = {
        equipe1:["Moilim Gazo - Chef","Bob LaMala - Serveur",
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