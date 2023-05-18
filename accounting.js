//extract and parse the json data
let json = localStorage.getItem('employ');
let employData = JSON.parse(json);
// calculate the avrage salary and empoly count of every department 
const avgSalary = {};
for (let i = 0; i < employData.length; i++) {
  const employee = employData[i];
  const dept = employee.department;
  const netSalary = employee.netSalary;

  if (!avgSalary[dept]) {
    avgSalary[dept] = { totalNetSalary: 0, count: 0 };
  }

  avgSalary[dept].totalNetSalary += netSalary;
  avgSalary[dept].count++;
}

const result = {};
for (const dept in avgSalary) {
  const totalNetSalary = avgSalary[dept].totalNetSalary;
  const count = avgSalary[dept].count;
  const avgNetSalary = totalNetSalary / count;
  result[dept] = avgNetSalary;
}
// render the table 
function render(){


const table = document.createElement('table');
table.classList.add('employTable');

const headerRow = document.createElement('tr');
headerRow.classList.add('employRow', 'employHeader');

const headerDept = document.createElement('th');
headerDept.classList.add('employDept');
headerDept.textContent = 'Department';

const headerNumEmployees = document.createElement('th');
headerNumEmployees.classList.add('employNumEmployees');
headerNumEmployees.textContent = 'Number of Employees';

const headerAvgSalary = document.createElement('th');
headerAvgSalary.classList.add('employAvgSalary');
headerAvgSalary.textContent = 'Average Salary';

headerRow.appendChild(headerDept);
headerRow.appendChild(headerNumEmployees);
headerRow.appendChild(headerAvgSalary);

table.appendChild(headerRow);

let totalNumEmployees = 0;
let totalNetSalary = 0;

for (const dept in result) {
  const row = document.createElement('tr');
  row.classList.add('employRow');

  const deptName = document.createElement('td');
  deptName.classList.add('employDept');
  deptName.textContent = dept;

  const numEmployees = document.createElement('td');
  numEmployees.classList.add('employNumEmployees');
  numEmployees.textContent = avgSalary[dept].count;

  const avgSalaryElement = document.createElement('td');
  avgSalaryElement.classList.add('employAvgSalary');
  avgSalaryElement.textContent = `$${result[dept].toFixed(2)}`;

  row.appendChild(deptName);
  row.appendChild(numEmployees);
  row.appendChild(avgSalaryElement);
  table.appendChild(row);
 // calculate total number of employees and total avrage salary
  totalNumEmployees += avgSalary[dept].count;
  totalNetSalary += avgSalary[dept].totalNetSalary;
}

// Create the row for the combined department
const combinedRow = document.createElement('tr');
combinedRow.classList.add('employRow', 'employCombined');

const combinedDept = document.createElement('td');
combinedDept.classList.add('employDept');
combinedDept.textContent = 'Total Salary';

const combinedNumEmployees = document.createElement('td');
combinedNumEmployees.classList.add('employNumEmployees');
combinedNumEmployees.textContent = totalNumEmployees;

const combinedAvgSalary = document.createElement('td');
combinedAvgSalary.classList.add('employAvgSalary');
combinedAvgSalary.textContent = `$${(totalNetSalary / totalNumEmployees).toFixed(2)}`;

combinedRow.appendChild(combinedDept);
combinedRow.appendChild(combinedNumEmployees);
combinedRow.appendChild(combinedAvgSalary);
table.appendChild(combinedRow);

const main = document.getElementById('main');
main.appendChild(table);
table.style.border = "1px solid black";
}
render();
//sadasdhfiohsioghliwsghioasoighasoirgfoias