function getAverage(assignment1,assignment2,assignment3){
    var total = assignment1 + assignment2 + assignment3;
    var average = total / 3 ;
    return average ;
}

var myAverage = getAverage(50,40,45);
console.log(myAverage);