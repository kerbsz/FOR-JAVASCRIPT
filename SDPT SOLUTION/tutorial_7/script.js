/*let age = 18;
let isregistered = true;

if(age >= 18 && isregistered) alert("Valid Voter")
else if(age >= 18 && !isregistered) alert("Register First")
else if(age <= 18 && isregistered) alert("Invalid Voter")
else if(age <= 18 && !isregistered) alert("Non Voters Age")
*/

let password = "kerbypogi";
let username = prompt("Enter username:  ");
let enter_pass = prompt("Enter Password: ");

if(enter_pass.toLowerCase()===password){
    alert(`Welcome ${username}`)
}else alert(`Wrong Password`);
