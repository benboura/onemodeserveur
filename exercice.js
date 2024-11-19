const express = require ("express");
const fs = require("fs");
const url = require("url");
const exercice = express();



exercice.get("/", (req, res )=> {
    fs.readFile( "accueil.html", "utf-8", (err, data)=> {       
          res.writeHead(200, {
          "content-type":"text/html;charset=utf-8"});
            res.write(data)

        res.end();
    })
    
});


exercice.get("/equipe", (req, res )=> {
    fs.readFile( "equipe.html", "utf-8", (err, data)=> {       
          res.writeHead(200, {
          "content-type":"text/html;charset=utf-8"});
            res.write(data)

        res.end();
    })
    
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


module.exports = exercice;