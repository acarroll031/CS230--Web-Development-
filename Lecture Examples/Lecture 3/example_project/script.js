// Variables
var x = 5;
var y = true;
var z = "Hello World!";

// If-Else

x = 4;
y = '4';

// x == y : true
// x === y : false

if(x = 4){

}
else if(x == 5){

}
else{
    console.log("Error: " + x)
}

// For-Loops
for(var i = 0; i < 10; i++){
    console.log(i);
}

// Function
function addNumbers(a, b){
    var result = a + b;
    console.log(result)
    return result;
}

function displayNumber(c){
    document.getElementById("counter").innerText = c;
    document.getElementById("counter").style.color = "red";
}

addNumbers(3, 4);


var student = {
    "Name": "Mark",
    "Email": "...",
    "Degree": "Computer Science"
}

console.log(student.Name)

var shoppingList = ["Eggs", "Milk", "Flour", true, 5, false]
shoppingList[1];

var name = "Session 1";


var player1 = {
    "Name": "Adam",
    "Class": "Wizard",
    "HP": 20
}

var player2 = {
    "Name": "Ben",
    "Class": "Barbarian",
    "HP": 50
}

var player3 = {
    "Name": "Charlie",
    "Class": "Monk",
    "HP": 10
}

var sixDice = Math.round(Math.random() * 6);
var twentyDice = Math.round(Math.random() * 20);

console.log("The 6-Sided Dice Rolled a " + sixDice);
console.log("The 20-Sided Dice Rolled a " + twentyDice);

var party = [player1, player2, player3];

for(var i = 0; i < party.length; i++){
    document.getElementById("party").innerText = 
    document.getElementById("party").innerText + party[i].Name + "\n";

    if(party[i].HP < 20){
        console.log(party[i].Name + " is injured!");
    }
    else if(party[i].HP >= 50){
        console.log(party[i].Name + " is at max health!");
    }
    else{
        console.log(party[i].Name + " is at " + party[i].HP)
    }
}