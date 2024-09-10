function calculateTax(income,expenses){
    //checking datatype of each input
    if(typeof income!= 'number' && typeof expenses!= 'number'){
        return "Please provide a valid number.";
    }

    //challenge case
    if(income < 0 || expenses < 0){
        return "Invalid Input";
    }

    //calculating tax
    let remainingMoney = income - expenses;

    let tax = remainingMoney * .20;

    return tax;
}
