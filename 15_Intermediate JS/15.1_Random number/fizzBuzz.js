var output = [];
var i = 1;
function fizzbuzz() {
    while(i<100){
        var nb = output.length;
        nb ++;
        if (nb%3 ===0){
            if(nb%5 ===0){
                output.push("FizzBuzz");
            }else{
                output.push("Fizz");
            }
        }else {
            if(nb%5 ===0 && nb%3 !==0){
                output.push("Buzz");
            }else{
                output.push(nb);
            }
        }
        console.log(output);
        i++;
    }
}
    