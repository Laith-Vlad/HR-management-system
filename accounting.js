let json = localStorage.getItem('employ');


let employData = JSON.parse(json);


let adminData = employData.filter(emp => emp.department === 'Administration');
let financeData = employData.filter(emp => emp.department === 'Finance');
let marketingData = employData.filter(emp => emp.department === 'Marketing');
let devData = employData.filter(emp => emp.department === 'Development');
let table = document.getElementById('employees-table');


