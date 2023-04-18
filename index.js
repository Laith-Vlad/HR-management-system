function Employ(id, firstName, lastName, department, level, image) {
    this.id = id;
    this.fullName = firstName + ' ' + lastName;
    this.department = department;
    this.level = level;
    this.image = image;
    this.netSalary = this.calculateNetSalary;
}

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
};
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
const employList = [
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
    let id = Math.floor(Math.random() * 9000) + 1000;
    let firstName = document.getElementById("nameInput").value
    let lastName = document.getElementById("lastName").value
    let department = document.getElementById("depInput").value
    let level = document.getElementById("levInput").value
    let image = document.getElementById("imgInput").value
    let myObject = new Employ(id, firstName, lastName, department, level, image);
    employList.push(myObject);
    console.log(employList);


});
Employ.prototype.render = function () {

const employCard = document.createElement("div")
employCard.classList.add("employcard")
const image = document.createElement("img")
image.setAttribute("src", this.image);
const id = document.createElement("h1")
id.textContent = this.id
const fullName = document.createElement("h2")
fullName.textContent = this.fullName
const department = document.createElement("h3")
department.textContent = this.department
const level = document.createElement("h4")
level.textContent = this.level

}


employList.forEach(function (employ){
    employ.render();
    console.log(Employ.fullName)
})