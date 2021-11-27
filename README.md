Kcal CALCULATOR, version 0.9.0
Author: Bradley M Walker
Date: 2021_11_25

ABSTRACT:

This is a simple calculator app designed to help users determine their daily calorie
needs. The arithmatic is done using the Mifflin-St Jeor Equation(s), which are as follows:

    Men:  10 x weight (kg) + 6.25 x height (cm) – 5 x age (y) + 5
    Women:  10 x weight (kg) + 6.25 x height (cm) – 5 x age (y) – 161

This calculates the baseload of daily calories. From that base, an activity factor
is introduced: 

    x 1.2   	Sedentary       	Little to no exercise
    x 1.375 	Light Activity  	Light exercise/sports 1-3 days per week
    x 1.55  	Moderate Activity 	Moderate exercise/sports 3-5 days per week
    x 1.725 	Very Active     	Hard exercise/sports 6-7 days per week
    x 1.9 	    Extra Active 	    Very hard exercise/sports and physical job

No funcitonality for persons under 18 years of age or non-binary gender 
is available at this time.



                                    VERSION ALPHA
                                    ______________
Going to start by using metric units initally. Once functionality is confirmed, I will add
a function to convert imperial units to metric automatically. 