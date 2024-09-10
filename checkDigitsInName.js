function checkDigitsInName(name){
    //challenge part.
    if(typeof name !== 'string'){
        return "Invalid Input";
    }

    //Checking for 0-9 digit.
    for(let letter of name){
        if(letter>="0" && letter<="9"){
            return true;
        }
    }
    return false;
}
