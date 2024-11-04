//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const pwdToCheck = "ILoveProgramming";
const port = 3000;
const app = express();
var pageToShow = "";

app.use(bodyParser.urlencoded({extended: true}));

function checkPassword(req, res, next){
    if (req.body.password === pwdToCheck){
        pageToShow = "/public/secret.html";
        }else{
            pageToShow = "/public/index.html";
        }
    next();
};

app.get("/", (req, res)=>{
    res.sendFile( __dirname + "/public/index.html");
});

app.use(checkPassword);

app.post("/check", (req,res)=>{
    res.sendFile(__dirname + pageToShow);
})

app.listen(port, ()=>{
    console.log(`Listening on ${port}.`);
});
