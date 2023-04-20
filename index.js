function Employ(id, firstName, lastName, department, level, image) {
    this.id = id;
    this.fullName = firstName + ' ' + lastName;
    this.department = department;
    this.level = level;
    this.image = image;
    this.netSalary = this.calculateNetSalary;
}
Employ.employList = [];
Employ.prototype.calculateNetSalary = function () {
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
    return Math.round(this.netSalary);
};
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
Employ.employList = [
    new Employ(1000, 'Ghazi', 'Samer', 'Administration', 'Senior', 'https://github.com/LTUC/amman-prep-d13/raw/main/Class-08/lab/assets/Ghazi.jpg'),

    new Employ(1001, 'Lana', 'Ali', 'Finance', 'Senior', 'https://github.com/LTUC/amman-prep-d13/raw/main/Class-08/lab/assets/Lana.jpg'),

    new Employ(1002, 'Tamara', 'Ayoub', 'Marketing', 'Senior', 'https://github.com/LTUC/amman-prep-d13/raw/main/Class-08/lab/assets/Tamara.jpg'),

    new Employ(1003, 'Safi', 'Walid', 'Administration', 'Mid-Senior', 'https://github.com/LTUC/amman-prep-d13/raw/main/Class-08/lab/assets/Safi.jpg'),

    new Employ(1004, 'Omar', 'Zaid', 'Development', 'Senior', 'https://github.com/LTUC/amman-prep-d13/raw/main/Class-08/lab/assets/Omar.jpg'),

    new Employ(1005, 'Rana', 'Saleh', 'Development', 'Junior', 'https://github.com/LTUC/amman-prep-d13/raw/main/Class-08/lab/assets/Rana.jpg'),

    new Employ(1006, 'Hadi', 'Ahmad', 'Finance', 'Mid-Senior', 'https://github.com/LTUC/amman-prep-d13/raw/main/Class-08/lab/assets/Hadi.jpg')


];

let formElement = document.querySelector("form");
formElement.addEventListener("submit", function (event) {
    event.preventDefault()
    let id = Math.floor(Math.random() * 9000) + 1006;
    let firstName = document.getElementById("nameInput").value
    let lastName = document.getElementById("lastName").value
    let department = document.getElementById("depInput").value
    let level = document.getElementById("levInput").value
    let image = document.getElementById("imgInput").value
    const elementNetSalary = Employ.calculateNetSalary(level);
    let myObject = new Employ(id, firstName, lastName, department, level, image);
    Employ.employList.push(myObject);
    console.log(Employ.employList);
    saveData(Employ.employList);
 



});
Employ.prototype.render = function () {
    const container = document.createElement('main');
    
    container.classList.add('employ-container');
    container.style.width = '40px';
    container.style.height = '40px';
    document.body.appendChild(container);
    const image = document.createElement('img');
    image.src = this.image;
    image.style.height = '40px';
    image.style.width = '40px';
    container.appendChild(image);
    const id = document.createElement('p');
    id.textContent = `ID: ${this.id}`;
    container.appendChild(id);

    const fullName = document.createElement('p');
    fullName.textContent = `Name: ${this.fullName}`;
    container.appendChild(fullName);

    const department = document.createElement('p');
    department.textContent = `Department: ${this.department}`;
    container.appendChild(department);

    const level = document.createElement('p');
    level.textContent = `Level: ${this.level}`;
    container.appendChild(level);

    const elementNetSalary = this.calculateNetSalary(level);
    const netSalary = document.createElement('p');
    netSalary.textContent = `Net Salary: ${Math.round(elementNetSalary) }`;
    container.appendChild(netSalary);
}


Employ.employList.forEach(function (employ) {
    
    employ.render();
      
    

})

function saveData() {
    let data = JSON.stringify(Employ.employList);
    localStorage.setItem('employ', data);
  }
   saveData()
function getData() {
    let data = localStorage.getItem('employ');
    let x = JSON.parse(data);
    return x;
} 
console.log(localStorage.getItem('employ'));
