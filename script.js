
var value =0;
function numberclick(){
    value = value + 1;
    document.getElementById("digit").innerHTML = value;
    if (value >= 50){
        value = + 49;
        document.getElementById("higherbtn");
    }
    else{
        console.log("your digit are increasing")
    }
}

var value =0;
function numbersclick(){
    value = value - 1;
    document.getElementById("digit").innerHTML = value;
    if (value <= 0){
        value = + 1;
        document.getElementById("lowerbtn");
    }
    else{
        console.log("your digits are decreasing")
    }
};
