let json = localStorage.getItem('employ');


let employData = JSON.parse(json);
console.log(employData)
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

console.log(result)