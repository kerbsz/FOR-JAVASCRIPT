/*let i = 5;

while(i > 0){
    alert(i);
    i--;
}
*/


/*let names = ["kent","steven","james"];
let i = names.length-1;

while(names[i]){
    console.log(names[i]);
    i--;
}
*/

//----------Student Database Exercise-------//
/*let names= ["Kent", "Kerby", "Kelly","James"];
let i = 0;
let found = false;

let search = prompt("Search Name: ");

while(i < names.length){
    if(search.toLowerCase() == names[i].toLowerCase()){
        console.log(names[i])
        alert(`I have found you ${search.toUpperCase()}`);
        found=true;
        break;
    }
    i++
}

if(!found) alert("The Student data is not yet on Database");*/
//--------------------------//
/*let i = 0;

do{
    alert("hello");
    i++;
}while(i < 5){

}*/
alert("You Must Enter Numbers To Add")
let num1 = parseInt(prompt("Enter Numbers: "))
let num2 = parseInt(prompt("Enter Numbers: "))
let num3 = parseInt(prompt("Enter Numbers: "))
let num4 = parseInt(prompt("Enter Numbers: "))
let num5 = parseInt(prompt("Enter Numbers: "))

let numbers = [num1, num2, num3, num4,num5];
let i = 0;
let sum = 0;
while(i < numbers.length){
    sum += numbers[i];
    i++;
}
alert(`The sum is ${sum}`);
console.log(sum);




