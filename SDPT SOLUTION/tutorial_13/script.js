
function sayhello(){
    alert("Hello!");
}

/*
//say hello 3 times
for(let i = 1; i <= 3; i++){
    sayhello();
}
*/
//--------------------------------------------//
/*function add(num1,num2){
   let sum = parseFloat(num1)+ parseFloat(num2);
   console.log(sum)
}
//add(20,20);

function multiply(num1,num2){
   let sum = parseFloat(num1) * parseFloat(num2);
   console.log(sum)
}
//multiply(20,20);
*/

//--------------------------------------------//
/*let names = ["Kerby", "Kent", "Echo", "James"];

function section(st_names){
    for(let i =0; i < st_names.length; i++){
        console.log(`Student ${i+1}: ${st_names[i]} 12 - JAVA`)
    }
}

section(names);
*/

//-------------------------//
/*
function add(num1,num2, num3){
    return num1 + num2 + num3;
}
let sum = add(20,20,10) + add(10,10,10);
console.log(sum)

function sub(num1,num2, num3){
    return num1 + num2 + num3;
}
let minus = add(20,20,10) - add(10,10,10);
console.log(minus)

function multiply(num1,num2, num3){
    return num1 + num2 + num3;
}
let prod = add(20,20,10) * add(10,10,10);
console.log(prod);
*/
//-------------------------//



function acceptArray(arraynum){
    let sum = 0;
    for(let i = 0; i < arraynum.length; i++){
        sum+=arraynum[i];
    }
    return sum;
}

console.log(acceptArray([5,5,5,5,5,5,5,5,5,5]));













