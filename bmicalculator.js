function bmiCalculator (weight, height) {
    var bmi = Math.floor(weight/(height*2));
    var interpretation; 
    if(bmi < 18.5){
    interpretation =  alert("Your BMI is " + bmi + " so you are underweight");
    }
    if(bmi > 18.5 && bmi < 24.9){ 
     interpretation = alert("Your BMI  is " + bmi + " so you are normal weight"); 
     
    }
    
    if(bmi > 24.9){
     interpretation = alert("Your BMI is " + bmi + " so your are overweigth");
    }
    
    console.log(interpretation);
}

var change = bmiCalculator(210 , 5.11)
console.log(change)
