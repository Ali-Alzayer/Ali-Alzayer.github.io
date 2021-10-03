let welcomeMaessage = "Awesome Jaguar Zippy would like your number...";
let errorMessage = "\nInvalid number please insert number between 0 and 11";
let shoudPropmt = true;
let showError = false;
while(shoudPropmt){
    let inputNumber = 0;
    if(!showError){
        inputNumber = prompt(welcomeMaessage);
    }else{
        inputNumber = prompt(welcomeMaessage + errorMessage);
    }
    let isValid = validateEntry(inputNumber);
    if(isValid){
        let shape = getShape(round(inputNumber));
        alert("Name of polygon is "+shape);
        shoudPropmt = false;
        document.getElementById("display").innerHTML = "Name of polygon is "+shape;
    }else{
        showError = true;
    }
}
function validateEntry(number){
    if(isNumber(number)){
        if(isInRange(number)){
            return true;
        }
        else{
            return false;
        }
    }else{
        return false;
    }
}
function isNumber(number){
    if (number.match(/^-?\d+$/)){
        return true;
    }
    else if(number.match(/^-?\d+\.\d+$/)){
        return true;
    }else{
        return false;
    }
}
function isInRange(number){
    if(number == 0) return false;
    if(number < 11 && number > -11) return true;
    else return false;
}
function round(number){
    let temp = Math.floor(number);
    if (temp < 0) temp = temp * -1;
    if(temp + 0.5 < number){
        temp = temp + 1;
    }
    if(temp > 10) temp = 10;
    return temp;
}
function getShape(number){
    const shapes = ["henagon", "digon", "trigon","tetragon","pentagon","hexagon","heptagon","octagon","enneagon","decagon"];
    return shapes[number - 1];
}