import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res)=>{
    res.send("<h1>Hello Man! </h1>");
});

app.get("/contact", (req, res)=>{
    res.send("<h2>Contact me on 0660606 </h2>");
});

app.get("/about", (req, res)=>{
    res.send("<h3>I'm the one</h3>");
});

app.listen(port, ()=>{
    console.log(`Serveur running on port ${port}.`);
});