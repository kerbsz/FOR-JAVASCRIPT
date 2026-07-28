function readInput(e){
    let value = e.target.value;
    alert(value);
}

function toBlack(){
    setTimeout(()=>{
        let body = document.querySelector("body");
        body.style.transition = "2s";
        body.style.background = "black";
        },5000);
}

/*setInterval(()=>{
    let body = document.querySelector("body");
    body.style.transition = "1s";
    if(body.style.background === "black") body.style.background = "white";
    else body.style.background = "black";

},2000);
*/

//alert("Input some Number: ")
//let num1 = parseFloat(prompt("Enter num 1: "));
//let num2 = parseFloat(prompt("Enter num 2: "));

/*setTimeout(()=>{
    let body = document.querySelector("body");
    body.style.transition = "2s";
    body.style.background = "black";
},5000);
*/ 

//--------------------------SHORTCUT USING ARROW FUNCTION-------------------//

let fruits1 = ["Apple" , "Mango"];
let fruits2 = ["StarApple" , "Guava"];
let allFruits = [...fruits1, "Melon", ...fruits2];

console.log(allFruits)

let person = {
    fname: "kerby",
    lname: "sexon",
    age : 18,    
}

let {fname,lname,age} = person;
console.log(fname + lname)





let add = (x,y) => x + y;
let sub = (x,y) => x - y;
let mul = (x,y) => x * y;
let dev = (x,y) => x / y;
let sqr = (x) => x * x ;
let cube = (x) => x*x*x;

let sum = add(num1,num2);
let minus = sub(num1,num2);
let prod = mul(num1,num2);
let division = dev(num1,num2);
let sqrr = sqr(num1);
let cubee = cube(num1);

console.log(`
            Addition       : ${sum}
            Subtraction    : ${minus}
            Multiplication : ${prod}
            Division       : ${division}
            Sqaureroot     : ${sqrr}
            Cube           : ${cubee}
`);









