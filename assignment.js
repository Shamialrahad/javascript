

//Convert Kilometer to meter function
function kilometerToMeter(distance){
    //check user input
    if (isNaN(distance) || distance <=0 || distance === '') {
        var errorMessage = "Input Valid number!!";
        return errorMessage;
      } else {
        var meter = distance*1000;
        return meter; //If valid input than show result
    }
}



//BudgetCalculator for total budget CalCulation 
function budgetCalculator(watch,phone,laptop){
    //check valid input
    if (isNaN(watch,phone,laptop) || (watch,phone,laptop) <=0 || (watch,phone,laptop) === '') {
        var errorMessage1 = "Please enter valid number of product!!"; //show error message if wrong input
        return errorMessage1;
      } else {
        var watch = watch*50;
        var phone = phone*100;
        var laptop = laptop*500;

        total = watch+phone+laptop;

        return total; //final result
    }
}



//Calculation total hotel bill
function hotelCost(day){
    //check valid input
    if (isNaN(day) || (day) <=0 || (day) === ''){
        var errorMessage2 = "Enter valid input!!"; //error message for wrong input
        return errorMessage2;
    }
    else{
        if(day<=10){
           var finalBill = day*100;
        }
        else if(day<=20){
            var firstTerm = 10*100;
            var remaining = day-10;
            var secondTerm = remaining*80;
            finalBill = firstTerm + secondTerm;
        }
        else{
            var firstTerm = 10*100;
            var secondTerm= 10*80;
            var remaining = day-20;
            var thirdTerm = remaining*50;
            finalBill = firstTerm+secondTerm+thirdTerm;
        }
        return finalBill; //final result
    }
}



//Find longest friends name function
function megaFriend(name){
    var longest = name[0];
    for(var i=0; i<name.length; i++){
        var element = name[i];
        if(element.length > longest.length){
            longest = element;
        }
    }
    return longest; //print longest name

}
