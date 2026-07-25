
/*for(let i = 0; i < 5; i++){
    console.log(`Hello  World ${name}`);
    
}
*/

/*let names = ["James", "Kent", "Bolima", "Kerby", "Echo"];

for(let i = 0; i < names.length; i++){
    console.log(`Hello ${names[i]}`);

    if(names[i].toLowerCase() === "kerby"){
        alert(`Congrats ${names[i]} you won the LOTTERY`)
        break;
    }
}*/

//-------------------------FOR /IN LOOP-----------------//
/*let st_names = ["James", "Kent", "Bolima", "Kerby", "Echo"];

for(let i in st_names){
    console.log(st_names[i])

    if(st_names[i].toLowerCase() == "echo") alert(`you won ${st_names[i]}`)
}
*/


//-------------------------FOR /OF LOOP-----------------//
/*let st_names = ["James", "Kent","Echo", "Franz", "Bolima", "Kerby" ];

for(let students of st_names){
    console.log(students)
}
*/

/-------------------------Tutorial Challenge-----------------//

let names = ["James", "Kent","Echo", "Franz", "Bolima", "kerby" ];
console.log(names);
let search = prompt("Search: ")

let found = false;

for(let i = 0; i < names.length; i++){

    if(search.toLowerCase() === names[i].toLowerCase() ){
        alert(`Found ${names[i]}`);
        found = true;
        break;
    }
}
if(!found) alert("not found")

//-------------------------------------------------------------//


let names = ["James", "Kent","Echo", "Franz", "Bolima", "kerby" ];
console.log(names);
let search = prompt("Search: ")
let found = false;

for(let st of names){
    if(st.toLowerCase() === search.toLowerCase() ){
        alert(`Found ${st}`);
        found = true;
        break;
    }
}
if(!found) alert("not found")

