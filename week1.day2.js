//Primitive Data Types

let number=3348;

if(number%2==0){
console.log("Number divisible by 2")
}
else{
  console.log("Number NOT divisible by 2")  
}


//number type 

let num=87;
if(num > 0){
    console.log("Number is greater than zero");
}
else if(num < 0){
     console.log("Number is lesser than zero");
}
else{
    console.log("Number is zero");
}

//conditional statements
let browserName='chrome';

if(browserName=='chrome'){
    console.log("You have launched chrome")
}
else{
    console.log("You have launched Edge")
}

let testType='smoke';

switch(testType){
    case 'sanity':
    console.log("You are running sanity test");
    break;

    case 'smoke':
    console.log("You are running smoke test");
    break;

    case 'regression':
    console.log("You are running regression test");
    break;

    default:
    console.log("You are running sanity test");

}

//grade

let score=89;
let grade;

switch(true){
    case (score>=90):
    grade='A';
    break;

    case (score>=80):
    grade='B';
    break;

    case (score>=70):
    grade='C';
    break;

    case (score>=60):
    grade='D';
    break;

    default:
    grade='Fail';


}
console.log(grade)