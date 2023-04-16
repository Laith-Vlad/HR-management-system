function Employ(id, firstName, lastName, department, level) {
    this.id = id;
    this.fullName = firstName + ' ' + lastName;
    this.department = department;
    this.level = level;
    this.netSalary = 0;

    this.calculateNetSalary = function () {
        switch (this.level) {
            case 'Senior':
                this.netSalary = getRandomNumber(1500, 2000) * 0.925;
                break;
            case 'Mid-Senior':
                this.netSalary = getRandomNumber(1000, 1500) * 0.925;
                break;
            case 'Junior':
                this.netSalary = getRandomNumber(500, 1000) * 0.925;
                break;
            default:
                this.netSalary = 0;
                console.log('Invalid level');
        }
    };
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
const employList = [
    new Employ(1000, 'Ghazi', 'Samer', 'Administration', 'Senior'),

    new Employ(1001, 'Lana', 'Ali', 'Finance', 'Senior'),

    new Employ(1002, 'Tamara', 'Ayoub', 'Marketing', 'Senior'),

    new Employ(1003, 'Safi', 'Walid', 'Administration', 'Mid-Senior'),

    new Employ(1004, 'Omar', 'Zaid', 'Development', 'Senior'),

    new Employ(1005, 'Rana', 'Saleh', 'Development', 'Junior'),

    new Employ(1006, 'Hadi', 'Ahmad', 'Finance', 'Mid-Senior')

];
employList.forEach(employ => {
    employ.calculateNetSalary();

    const tableRow = document.createElement('tr');

    // const idCell = document.createElement('td');
    // idCell.textContent = employ.id;
    // tableRow.appendChild(idCell);

    const fullNameCell = document.createElement('td');
    fullNameCell.textContent = employ.fullName;
    tableRow.appendChild(fullNameCell);

    // const departmentCell = document.createElement('td');
    // departmentCell.textContent = employ.department;
    // tableRow.appendChild(departmentCell);

    // const levelCell = document.createElement('td');
    // levelCell.textContent = employ.level;
    // tableRow.appendChild(levelCell);

    const netSalaryCell = document.createElement('td');
    netSalaryCell.textContent = employ.netSalary.toFixed(2);
    tableRow.appendChild(netSalaryCell);

    document.getElementById('employTableBody').appendChild(tableRow);
});