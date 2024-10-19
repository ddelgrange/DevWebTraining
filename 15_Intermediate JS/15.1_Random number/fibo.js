function fibonacciGenerator (n) {        
    var output = [];
    if(n<0){
        output = [];
    }else if (n === 1){
        output= [0];
    }else if (n===2){
        output=[0,1];
    }else if (n >2){
        output = [0,1];
        for(var i = 3; i<=n; i++){
            var last = output[output.length-1];
            var last2 = output[output.length-2];
            var lastToPush = last + last2;
            output.push(lastToPush);
        }
    }
    
    return output;
    }