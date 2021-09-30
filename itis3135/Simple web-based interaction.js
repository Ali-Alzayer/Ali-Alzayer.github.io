let CompanyName = "Awesome Jaguar Zippy ltd Company"
let name_ = prompt("Hey there visitor whats your name");
let health = prompt("How you doing?");
let today = new Date();
document.getElementById("date").innerHTML += today.toDateString() +" and Time is " + today.toTimeString().slice(0, 8);
document.getElementById("welcome").innerHTML += " <b>"+name_ +"</b> To "+ CompanyName + " <br/> We're glad you are doing "+health ;

document.getElementById("button1").onclick = calculateArea;
document.getElementById("button2").onclick = calculatePeri;
document.getElementById("button3").onclick = calculateAreaTriangel;
document.getElementById("button4").onclick = calculateAreaSquare;
document.getElementById("button5").onclick = calculatePeriSquare;

function calculateArea(event) {
    let width  = document.getElementById("width").value;
    let height  = document.getElementById("height").value;
    document.getElementById("area").innerHTML = "Area is " + width * height;
}

function calculatePeri(event) {
    let width  = document.getElementById("width").value;
    let height  = document.getElementById("height").value;
    document.getElementById("peri").innerHTML = "Perimeter is " + 2*width + 2*height;
}

function calculateAreaTriangel(event) {
    let width  = document.getElementById("base").value;
    let height  = document.getElementById("heightT").value;
    document.getElementById("areaT").innerHTML = "Area is " + width * height;
}

function calculateAreaSquare(event) {
    let length  = document.getElementById("length").value;
    document.getElementById("areaS").innerHTML = "Area is " + length * length;
}

function calculatePeriSquare(event) {
    let length  = document.getElementById("length").value;
    document.getElementById("periS").innerHTML = "Perimeter is " + 4*length;
}