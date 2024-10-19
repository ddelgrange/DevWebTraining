count = 99
function sing(){
        
    while(count>0){
        if(count === 1){
            console.log(count+" bottle of beer on the wall, "+count+ " bottle of beer.");
            console.log("Take one down and pass it around, no more bottles of beer on the wall.")
        }else{
            console.log(count+" bottles of beer on the wall, "+count+ " bottles of beer.");
            var newcount = count -1;
            console.log("Take one down and pass it around, "+newcount+" bottles of beer on the wall.")
        }
        if(count===1){
            console.log("No more bottles of beer on the wall, no more bottles of beer.")
            console.log("Go to the store and buy some more, 99 bottles of beer on the wall.")
        }
        count--;

        
        
    }
    
    }
    
//Solution
var numberOfBottles = 99
while (numberOfBottles >= 0) {
    var bottleWord = "bottle";
    if (numberOfBottles === 1) {
        bottleWord = "bottles";
    } 
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
	numberOfBottles--;
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
}