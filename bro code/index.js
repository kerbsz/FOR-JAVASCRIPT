const myText = document.getElementById("myText");
const mySubmit =  document.getElementById("mySubmit");
const result = document.getElementById("result");

let age;

mySubmit.onclick = function(){
    
    age = myText.value
    age = Number(age);

    if(age >= 18){
        result.textContent = `You can drive`;
        alert("You can drive")
    }else if(age > 10){
        result.textContent = `You are a minorr`;
        alert("You are minor  you need drivings license")
    }else{
        result.textContent = `You cannot drive`;
        alert("You cannot drive")
    }
    

}
