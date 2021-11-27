/*   script.js
*
*
*
*   Formula's:              
*  Men - 10 x weight (kg) + 6.25 x height (cm) – 5 x age (y) + 5
*  Women - 10 x weight (kg) + 6.25 x height (cm) – 5 x age (y) – 161   
*
*/







function mensCal(){

    //using my own stats for build, in metric
    let weight = 81.64  //kilograms
    let height = 189    //cm
    let age = 26        //years

    let base = 10 * weight + 6.25 * height - 5 * age + 5

    console.log('Your daily base load is '+ base + ' Kcal')
    return base
}

function womenCal(){

    //stand in, using psudo-average US female data via CDC, converted to metric
    let weight = 61.23       //kilograms
    let height = 164.5       //cm
    let age = 20             //years


    let base = 10 * weight + 6.25 * height - 5 * age - 161

    console.log('Your daily base load is '+ base + ' Kcal')
    return base
}

/*
const submit = document.querySelectorAll('#submit');
submit.onclick = function gender(){

let male = document.getElementById('#maleButton');
let female = document.getElementById('#femaleButton');

    if(male.checked==true){
      console.log(mensCal());
     // alert('male selected');

    } else if(female.checked==true){
        womenCal();
       //alert('female selected');

    } else{
        alert('please select a gender');
    }


    }//end gender()
*/