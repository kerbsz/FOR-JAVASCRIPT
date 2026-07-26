/*let H_world = document.getElementById("hello_world");
console.log(H_world)

let lorem_ip = document.getElementById("lorem_ipsum");
console.log(lorem_ip);
*/

//------------" # or . "------------//
/*
let h_world = document.querySelector("#hello_world");
console.log(h_world)

let lorem_ip2 = document.querySelector(".lorem_ipsum");
console.log(lorem_ip2)
*/

//------------"  "------------//
let allparagraphs = document.getElementsByTagName("p");
//console.log(allparagraphs);

let allh1 = document.querySelectorAll("h1")
//console.log(allh1);

let comments = document.getElementsByClassName("comment");
//console.log(comments)

//comments[3].innerHTML = "CHINA";
//console.log(comments[3])
//----------------------------------------------//


let firstTitle = document.querySelector("#first-title");
firstTitle.innerHTML = "THIS_THE_NEW_PAGE_TITLE";

let descriptions = document.querySelectorAll(".desc");
descriptions[0].innerHTML = "ENGLISH";
descriptions[1].innerHTML = "FILIPINO";
