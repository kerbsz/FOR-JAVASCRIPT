/*let person = {
    fname: "kerby",
    lname: "sexon",
    age: 18
}


let size = Object.keys(person).length;
console.log(size)

let keys =  Object.keys(person);
for(let i = 0; i < keys.length; i++){
    console.log(person[keys[i]]);
}
*/

//-------------Exercise--------------//
alert(`Enter your grade to the Following: `)
let math = parseFloat(prompt("Math: "));
let science = parseFloat(prompt("Science: "));
let pe = parseFloat(prompt("PE: "));
let filipino = parseFloat(prompt("Filipino: "));
let english = parseFloat(prompt("English: "));
let ap = parseFloat(prompt("Ap: "));

let subjects = {
    Math: math,
    Science: science,
    PE: pe,
    Filipino: filipino,
    English: english,
    Ap : ap
}

let subjects_keys = Object.keys(subjects);
let sum = 0;

for(let i = 0; i < subjects_keys.length; i++){
    sum+= subjects[subjects_keys[i]];
    console.log(`${subjects_keys[i]} : ${subjects[subjects_keys[i]]}`);

}
let average = sum/subjects_keys.length; 
console.log(`Average : ${average}`);

if(average >= 100) console.log("Invalid Grade");
else if(average >= 98) console.log("With Highest Honors");
else if(average >= 95) console.log("With High Honors");
else if(average >= 90) console.log("With Honors");
else if(average >= 75) console.log("Passed");
else console.log("You Failed");