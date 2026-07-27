function onloadAlert(){
    alert("Welcome, Sir");
}
function btnOnClick(){
    let click = document.getElementById("btnClickme");
    click.innerHTML = "HELLO USER"
    click.style.color = "red";
}
function h3Hover(){
    let h3hover = document.querySelector("#h3hover");
    h3hover.innerHTML = "YOU HOVER ME"
    h3hover.style.color = "pink"
}
function h3UnHover(){
    let h3unhover = document.querySelector("#h3hover");
    h3unhover.innerHTML = "Hover Me";
    h3unhover.style.backgroundColor = "RED";
}
function inputFocus(){
    let inp = document.querySelector("#input1");
    inp.style.backgroundColor = "red";
    inp.style.color = "white";
}
function inputblur(){
    let inp = document.querySelector("#input1");
    inp.style.backgroundColor = "black";
    inp.style.color = "red";
}
function Oninput(){
    let onInput = document.querySelector("#name");
    let p1 = document.querySelector("#p1");
    p1.innerHTML = onInput.value;
}
function onChange(){
    let onInput = document.querySelector("#name");
    let p1 = document.querySelector("#p1");
    p1.innerHTML = onInput.value;
}
function signIn(){
    let txtEmail = document.querySelector("#txtEmail").value;
    let txtpass = document.querySelector("#txtpass").value;
    alert(txtEmail + "\n" + txtpass + "\n" +
        "Time In: "+  Date()
    );
}
function getfavGames(){
    let selecfavGame = document.querySelector("#selectGame").value;
    alert(`Favorite Game: ${selecfavGame}`);
}
//EXERCISE----------------------------//
function submit(){
    let chechIfAgree = document.querySelector("#checkAgree").checked;
    if(chechIfAgree){
        let FNAME = document.querySelector("#fname").value;
        let LNAME = document.querySelector("#lname").value;
        let country = document.querySelector("#selectCountry").value;
        let bday = document.querySelector("#bday").value;
        let sex = document.querySelector("input[name = sex]:checked").value;

        let displayInfo = document.querySelector("#display_info");
        displayInfo.innerHTML = `\n Full Name: ${FNAME + " "+ LNAME} \n
                                 \n Country  : ${country} \n`;

        let displayInfo2 = document.querySelector("#display_info2");
        displayInfo2.innerHTML = `\n Birth Day: ${bday} \n
                                 \n Sex      : ${sex}`;                         

    }else {
        alert("YOU MUST AGREE TO THE POLICY FIRST");
    }
}
