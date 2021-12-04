/*   script.js
*
*
*
*   Formula's:              
*  Men - 10 x weight (kg) + 6.25 x height (cm) – 5 x age (y) + 5
*  Women - 10 x weight (kg) + 6.25 x height (cm) – 5 x age (y) – 161   
*
*/


class calculator{
    constructor(display){
        this.display = display;
    }//end constructor

    mensCal(){

        //using my own stats for build, in metric
        let weight = 81.64  //kilograms
        let height = 189    //cm
        let age = 26        //years
    
        let base = 10 * weight + 6.25 * height - 5 * age + 5
    
        console.log('Your daily base load is '+ base + ' Kcal')
        return base
    }//end mensCal()

     womenCal(){

        //stand in, using psudo-average US female data via CDC, converted to metric
        let weight = 61.23       //kilograms
        let height = 164.5       //cm
        let age = 20             //years
    
    
        let base = 10 * weight + 6.25 * height - 5 * age - 161
    
        console.log('Your daily base load is '+ base + ' Kcal')
        return base
    }//end woemnCal

}//end class calculator




const weight = document.querySelectorAll('[data-weight]')
const height = document.querySelectorAll('[data-height]')
const age = document.querySelectorAll('[data-age]')
const display = document.querySelectorAll('[data-display]')







//console.log(mensCal());