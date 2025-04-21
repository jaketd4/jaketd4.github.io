
let employees = [
    { firstName: "Sam", department: "Tech", designation: "Manager", salary: 40000, raiseEligible: true },
    { firstName: "Mary", department: "Finance", designation: "Trainee", salary: 18500, raiseEligible: true },
    { firstName: "Bill", department: "HR", designation: "Executive", salary: 21200, raiseEligible: false }
];

console.log("Initial Employees:", employees);


let company = {
    companyName: "Tech Stars",
    website: "www.techstars.site",
    employees: employees
};

console.log("Company Info:", company);


let newEmployee = { firstName: "Anna", department: "Tech", designation: "Executive", salary: 25600, raiseEligible: false };
company.employees.push(newEmployee);

console.log("After Adding Anna:", company.employees);


let totalSalary = company.employees.reduce((sum, emp) => sum + emp.salary, 0);
console.log("Total Salary:", totalSalary);


function applyRaises(companyObj) {
    companyObj.employees.forEach(emp => {
        if (emp.raiseEligible) {
            emp.salary *= 1.10; 
            emp.raiseEligible = false;
        }
    });
}

applyRaises(company);
console.log("After Applying Raises:", company.employees);

let wfhEmployees = ['Anna', 'Sam'];
company.employees.forEach(emp => {
    emp.wfh = wfhEmployees.includes(emp.firstName);
});

console.log("After Updating WFH Status:", company.employees);
