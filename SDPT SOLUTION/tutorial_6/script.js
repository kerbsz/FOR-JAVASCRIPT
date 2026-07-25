alert("Enter your grades on the following");
let English = prompt("Enter your English grade: ");
let Math = prompt("Enter your Math grade: ");
let Science = prompt("Enter your Science grade: ");
let Filipino = prompt("Enter your Filipino grade: ");
let PE = prompt("Enter your PE grade: ");

let average = (parseFloat(English) + parseFloat(Math) + parseFloat(Science) + parseFloat(Filipino) + parseFloat(PE)) /5;

if(average >= 100){
    alert("You're average is INVALID");
}else if(average >= 98){
    alert("You are With Highest Honor: " + average);
}else if(average >= 95){
    alert("You are With High Honor: " + average);
}else if(average >= 90){
    alert("You are With Honor: " + average);
}else if(average >= 75){
    alert("You Passed");
}else alert("See you next year: " + average)

