// These are the Coding Challenges of UDEMY COURSE of The Complete Javascript Code from Zero to Expert


// Javascript Fundamentals - Part 1

// Challenge # 1

let massMark = 25;
let massJohn = 30;
let heightMark = 1.3;
let heightJohn = 1.2;

const markBMI = massMark/heightMark^2;
const johnBMI = massJohn/heightJohn^2;

console.log(markBMI);
console.log(johnBMI);


const markHigherBMI = (markBMI > johnBMI);
console.log(markHigherBMI);

// END

// Challenge no 2

function highBMI(){

    if(markBMI > johnBMI){
        console.log("Mark's BMI is higher than John's")
    }
    else if (markBMI < johnBMI){
        console.log("Mark's BMI is higher than John's")
    }
    else{
        console.log("Both have same BMI")
    }
}

highBMI();