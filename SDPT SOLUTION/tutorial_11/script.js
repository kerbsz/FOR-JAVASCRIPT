let person ={
    firstname: "Kerby",
    lastname: "Sexon",
    bloodtype: "O",
    age: 18,
    hobbies:["coding","eating","gardening"],
    pets:{
        1:{
            name:"milky",
            type:"dog_serbian_husky"
        },
        2:{
            name:"thirdy",
            type:"dog_shih_tzu"
        }
    }
}
//console.log(person.pets[1].name);
//console.log(`Hello, I am ${person.firstname} ${person.lastname} my Age is ${person.age}`);
//console.log(person.pets[1].name)

//-------------------UPDATING JSON---------------//


let students = {
    fname: "kevin",
    sname: "linxon",
    bloodtype: "O",
    age: 26,
    fav_game: ["valorant", "lol", "nfs"],
    pets:{
        1:{
            name:"ruben",
            type:"bird"
        },
        2:{
            name:"woof",
            type:"snake"
        }
    }
}

/*students.bloodtype = "B";
console.log(students.bloodtype)

students.age = 30;
console.log(students.age)

students.middleInitial = 'L.'
console.log(students)
*/


///------------------JSON stringify ---------------------///
/*console.log(students)
console.log(" ")
let stringfy = JSON.stringify(students);
console.log(stringfy)
*/

///------------------JSON.parse---------------------///
/*let person_1 = `{"fname":"kent","sname":"javier","bloodtype":"O","age":19}`;
let person_1_converter = JSON.parse(person_1);
console.log(person_1_converter);
*/


///----------------Exercise-----------------------///
let Students = [
    {
        Fname: "Kerby",
        Lname: "Sexon",
        Awards: "With High Honor",
        Course: "BSCpE",
    },
    {
        Fname: "Kent",
        Lname: "Javier",
        Awards: "With High Honor",
        Course: "BSIT",
    },
    {
        Fname: "James",
        Lname: "Baloloy",
        Awards: "With Honor",
        Course: "BTLED-ICT",
    },
    {
        Fname: "Echo Jay",
        Lname: "Moana",
        Awards: "With Honor",
        Course: "BSIT",
    }
];

for(let i = 0; i < Students.length; i++){
    console.log(`
        Student no: ${i+1}
        Full Name: ${Students[i].Fname} ${Students[i].Lname}
        Award: ${Students[i].Awards} 
        Course: ${Students[i].Course}`);
    
    console.log("");
}
