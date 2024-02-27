
var counterStore = [0,0,0,0,0,0];
var recommendedAdult = [0,0,2,3,4,6];
var recommendedChild = [0,0,2,3,3,4]

var fourplus = true;

function increase(pos, id, pyramidlevel){
    counterStore[pos]++;
    document.getElementById(id).innerText = counterStore[pos];
}

function decrease(pos, id){
    counterStore[pos]--;
    if(counterStore[pos] < 0) counterStore[pos] = 0;
    document.getElementById(id).innerText = counterStore[pos];
}

function checkRecommended(pos, id){

    if(fourplus){ //If >4 use adult recommendations
        var rec = recommendedAdult[pos];
    }
    else{ //If <4 use child recommendations
        var rec = recommendedChild[pos];
    }
    var count = document.getElementById(id).innerText;

    if(id == 'l1') return false; //If in top level of pyramid, ignore

    if(count == rec){
        document.getElementById(id).style.borderColor = 'green';
    }
    else if(count == rec+1 || count == rec-1){
        document.getElementById(id).style.borderColor = 'yellow';
    }
    else{
        document.getElementById(id).style.borderColor = 'red';
    }

}

function setAge(){
    var select = document.querySelector('#age');
    var ageRange = select.value;
    console.log(ageRange);

    if(ageRange == 'onetofour'){
        fourplus = false;
    }
    else {
        fourplus = true;
    }

    console.log(fourplus);
}

const todaysDate = new Date();
const formattedTodaysDate = todaysDate.toISOString().substring(0,10);

function setDate(){
    var select = document.querySelector('#date');
    var date = select.value;
    console.log(date);

    console.log(formattedTodaysDate);
    if(date != formattedTodaysDate){
        alert('Not Todays date!');
    }
}