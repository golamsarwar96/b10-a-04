function calculateFinalScore(obj){
    if(typeof obj !== "object"){
        return "Invalid Input";
    }

    totalMarks = obj.testScore + obj.schoolGrade;
    
    if(obj.isFFamily){
        totalMarks += (totalMarks * 0.2);
    }

    if(totalMarks>=80){
        return true;
    }
    
    return false;
}
