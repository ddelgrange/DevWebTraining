import express from "express";

const port = 3000;
const app = express();

var weekDay = "";
var howToWork = "";

app.get("/", (req, res)=>{
    const today = new Date();
    const dayOfWeek = today.getDay();
    if (dayOfWeek >= 1 && dayOfWeek <=5){
        weekDay = "weekday";
        howToWork = "work hard";
    }else{
        weekDay = "weekend";
        howToWork = "have fun";
    };

    res.render("index.ejs", 
    { jour: weekDay,
        travail: howToWork,
    });
});

app.listen(port, ()=>{
    console.log(`Listening on ${port}.`);
});