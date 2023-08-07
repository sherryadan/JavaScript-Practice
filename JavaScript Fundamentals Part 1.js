// These are the Coding Challenges of UDEMY COURSE of The Complete Javascript Code from Zero to Expert
// New Commit


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

// Challenge no 3
sD1 = 91; sD2=88; sD3=110;
sK1=88;sK2=91; sK3=110;

const averageScoreDolphins = (sD1+sD2+sD3)/2;
const averageScoreKoalas= (sK1+sK2+sK3)/2;

function highaverage(){
    if(averageScoreDolphins > averageScoreKoalas){
        console.log("Dolphins Win")
    }
    else if(averageScoreKoalas>averageScoreDolphins){
        console.log("Koalas Win")
    }
    else{
        console.log("It's a Draw")
    }
}
highaverage()

// Challenge no 4


function billcal(bill){
    bill=30; 
        return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.15;
}

const billcost = 400; 
const tip = billcal(billcost)

console.log( "The Bill was " + billcost + " the tip was " + tip + " and the total value is " + (tip + billcost)  )

