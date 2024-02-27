//Variables
var x = 5;
var y = true;
var z = "Hello World!";

// If-else
if(x == 4){

}
else if(x == 5){

}
else {
    console.log("Error: " + x); //Print statement
}

//= assignment
//== check equal
//=== check equal if variable type is true aswell

// For-loops
for(var i = 0; i < 10; i++){
    console.log(i);
}

// Functions
function addNumbers(a, b){
    var result = a + b;
    console.log(result);
    return result;
}

function displayNum(c){
    document.getElementById("counter").innerText = c;
    document.getElementById("counter").style.color = "red";
}

var student = {
    "Name": "",
    "Email": "",
    "Degree": ""
}

console.log(student.Name);

var shoppingList = ["Eggs", "Milk", "Flour", true, 5, false];
shoppingList[1];