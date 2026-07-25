/*let difficulty = 6;

switch(difficulty){
    case 1:
        alert("Easy");  
        break;
    case 2:
        alert("Normal");
        break;
    case 3:
        alert("Hard");
        break;
    case 4:
        alert("Extreme");
        break
    default:
        alert("INVALID DIFFICULTY");
}*/

alert("Enter 1 - 31 for the Month of July");
let day = prompt("Day: ");

switch(parseInt(day)){
    case 6: case 13: case 20: case 27:
        alert("Monday");
        break;
    case 7: case 14: case 21: case 28:
        alert("Tuesday");
        break;
    case 1: case 8: case 15: case 22: case 29:
        alert("Wednesday");
        break;
    case 2: case 9: case 16: case 23: case 30:
        alert("Thursday");
        break;
    case 3: case 10: case 17: case 24: case 31:
        alert("Friday");
        break;
    case 4: case 11: case 18: case 25:
        alert("Saturday");
        break;
    case 5: case 12: case 19: case 26:
        alert("Sunday");
        break;
    default:
        alert("INVALID DAY");
}

