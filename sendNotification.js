function sendNotification(email){
    //Challenge Part
    if(email.includes("@") === false){
        return "Invalid Email";
    }

    //Sending notification using email string.
    let newStr = email.split("@");

    let notification = newStr[0] + " sent you an email from " + newStr[1];

    return notification;
}
