var person = [];
var salaries = [];

document.getElementById("addSalary").onclick = addSalary;
document.getElementById("displayResult").onclick = displayResults;
document.getElementById("displaySalary").onclick = displaySalary;

let personList = document.getElementById("personList");
personList.innerHTML = "";
for (let i = 0; i < person.length; i++) {
  personList.innerHTML += "<option value=" + salaries[i] + ">" + person[i] + "</option>";
}


function addSalary() {
  let name_ = document.getElementById("name").value;
  let salary = document.getElementById("salary").value;

  if (name_.match(/^\d+\.?\d*$/) | name_ === "") {
    alert("Please Enter Valid Name");
    return;
  }

  if (salary.match(/^\d+\.?\d*$/)) {
    salary = parseFloat(salary);
  } else {
    alert("Please Enter Valid Salary");
    return;
  }

  person.push(name_);
  salaries.push(salary);

  personList.innerHTML += "<option value=" + salary + ">" + name_ + "</option>";

  document.getElementById("name").value = "";
  document.getElementById("salary").value = "";

  alert("Salary Added Successfully");

}


function displayResults() {
  var total = 0;
  var Highest = 0;
  salaries.forEach(item => {
    total += item;
    if (Highest < item) Highest = item;
  });

  document.getElementById("results").innerHTML = "<br><h2> Results Are:</h2> <p class='results'>Avrage: " + total / salaries.length + "<br>Highest: " + Highest + "</p>"

}

function displaySalary() {
  let table = document.getElementById("results_table");
  table.innerHTML = "<thead><tr> <th>Name</th> <th>Salary</th> </tr></thead><tbody>"
  for (let i = 0; i < person.length; i++) {
    table.innerHTML += "<tr><td>" + person[i] + "</td><td>" + salaries[i] + "</td></tr>";
  }
  table.innerHTML += "</tbody>"
}

function getSelectedPerson() {
  console.log(document.getElementById("personList").value);
}

