/*var n = Math.random();
console.log(n);
n = n *6 ;
console.log(n);
n = Math.floor(n) + 1;
console.log(n);


var love = Math.random();
love = love * 100;
love = Math.floor(love);
console.log(love);
*/
prompt("What is your name?");
prompt("What is their name?");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;
if(loveScore > 85){
    alert("Your love SCore is " + loveScore + "%. You love each over for eternity!");
}else{
    alert("Your love SCore is " + loveScore + "%");
}