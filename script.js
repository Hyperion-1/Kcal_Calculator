/*   script.js
*
*   Formula's:              
*  Men - 10 x weight (kg) + 6.25 x height (cm) – 5 x age (y) + 5
*  Women - 10 x weight (kg) + 6.25 x height (cm) – 5 x age (y) – 161   
*
*/

//The five input variables
var gender = document.getElementById("genderSelect")
var weight = document.getElementById("weight");
var height = document.getElementById("height");
var age = document.getElementById("age");
var activity = document.getElementById("activityFactor");

//display 
var display = document.getElementById("display");

//end value for user
var base = 0;



//enables and updates the display
//TODO: seperate male/female calculation
document.getElementById('run').addEventListener("click", function(){
    display.value = 10 * weight.value + 6.25 * height.value - 5 * age.value + 5;
});

//Clear button
document.getElementById('clear').addEventListener("click", function(){
 //   gender.value = null; not functional
    weight.value = null;
    height.value = null;
    age.value = null;

    display.value = null;
});



function mensCal(){        
     base = 10 * weight + 6.25 * height - 5 * age + 5
     return base
    }//end mensCal()

function womenCal(){    
     base = 10 * weight + 6.25 * height - 5 * age - 161    
     return base
    }//end womenCal

 console.log("( ͡° ͜ʖ ͡°) ay")