// import du framework ExpressJs
import express from "express";

const express = require ("express")

// on crée l'application ExpressJs
const app = express();


app.get("/bonjour", (req, res )=> {
    res.end("Salam, 🫱🏼‍🫲🏾");
});



app.listen(3001, ()=> {
    console.log("serveur écoute le port 3001");
});
