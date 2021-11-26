/*                  
*  Men - 10 x weight (kg) + 6.25 x height (cm) – 5 x age (y) + 5
*  Women - 10 x weight (kg) + 6.25 x height (cm) – 5 x age (y) – 161   
*
*/

//also, look into breakpoints to replace 'console.log()'

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

    //stand in
    let weight = 40.12  //kilograms
    let height = 142    //cm
    let age = 26        //years


    let base = 10 * weight + 6.25 * height - 5 * age - 161

    console.log('Your daily base load is '+ base + ' Kcal')
    return base
}

mensCal()
womenCal()

