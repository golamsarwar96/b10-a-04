function waitingTime(waitingTimes, serialNumber){
    if(Array.isArray(waitingTimes)!== true || typeof serialNumber !== 'number'){
        return "Invalid Input";
    }

    let sum=0;
    for(let num of waitingTimes){
        sum+=num;
    }  
    //average of waiting time.
    let avg = Math.ceil(Math.round(sum/arr.length));

    //remaining candidate
    let remaining = Math.abs(arr.length-(serialNumber-1)); 

    //Waiting time
    let waitingTime = avg * remaining;
    
    return waitingTime;

}


let arr = [6];
let serial = 4;

let result = waitingTime(arr,serial);
console.log(result);