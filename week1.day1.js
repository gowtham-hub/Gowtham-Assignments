//variables and types
let firstName="Gowtham";
let companyName="TCS";
let mobileNumber=9999888222;
let isAutomation=true
let hasPlaywright;

console.log(firstName+" "+typeof(firstName))
console.log(companyName+" "+typeof(companyName))
console.log(mobileNumber+" "+typeof(mobileNumber))
console.log(isAutomation+" "+typeof(isAutomation))
console.log(hasPlaywright+" "+typeof(hasPlaywright))

//scope of variables
const browserVersion = "Chrome"; // Global


if (browserVersion === "Chrome") {
    let browserVersion = "Shadowed with let"; // Shadows global
    console.log("Inside if block:", browserVersion);
}

console.log("Outside if block:", browserVersion);