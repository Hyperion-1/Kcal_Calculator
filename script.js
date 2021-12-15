/*   script.js
*
*   Formula's:              
*  Men - 10 x weight (kg) + 6.25 x height (cm) – 5 x age (y) + 5
*  Women - 10 x weight (kg) + 6.25 x height (cm) – 5 x age (y) – 161   
*
*   ACTIVITY FACTOR
        x 1.2   	Sedentary       	Little to no exercise
        x 1.375 	Light Activity  	Light exercise/sports 1-3 days per week
        x 1.55  	Moderate Activity 	Moderate exercise/sports 3-5 days per week
        x 1.725 	Very Active     	Hard exercise/sports 6-7 days per week
        x 1.9 	    Extra Active 	    Very hard exercise/sports and phys


    Conversions:
        LBs to KG: 1 lb * 0.45359237

*/

//variables (gender enabled seperately)
var weight = document.getElementById("weight");
var height = document.getElementById("height");
var age = document.getElementById("age");
var activity = document.getElementById("activityFactor");

//display 
var display = document.getElementById("display");








//enables and updates the display
document.getElementById('run').addEventListener("click", function(){
    //male condition
    if(document.getElementById('maleButton').checked){
      display.value = 10 * weight.value + 6.25 * height.value - 5 * age.value + 5;
    }
    
    //female condition
    if(document.getElementById('femaleButton').checked){
        display.value = 10 * weight.value + 6.25 * height.value - 5 * age.value - 161;
    }

});

//Clear button
document.getElementById('clear').addEventListener("click", function(){
    weight.value = null;
    height.value = null;
    age.value = null;

    display.value = null;
});


//dedicated male/female functions, leaving in for now
function mensCal(){        
     let base = 10 * weight + 6.25 * height - 5 * age + 5
     return base
    }//end mensCal()
function womenCal(){    
     let base = 10 * weight + 6.25 * height - 5 * age - 161    
     return base
    }//end womenCal


//easter egg
 console.log("( ͡° ͜ʖ ͡°) ay")