// Problem 1 & 2: Fetch and display original company and employee data
fetch('company.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to load JSON: ' + response.statusText);
    }
    return response.json();
  })
  .then(company => {
    console.log("// Problem 1 & 2: Original Company and Employees JSON");
    console.log(JSON.parse(JSON.stringify(company)));

    // Problem 3: Add a new employee (Anna is already in JSON, so we'll just log it)
    console.log("// Problem 3: Added new employee Anna");
    const anna = company.employees.find(emp => emp.firstName === "Anna");
    console.log(anna);

    // Problem 4: Calculate total salary
    const totalSalary = company.employees.reduce((sum, emp) => sum + emp.salary, 0);
    console.log("// Problem 4: Total salary of all employees:", totalSalary);

    // Problem 5: Apply raises to eligible employees
    company.employees.forEach(emp => {
      if (emp.raiseEligible) {
        emp.salary *= 1.10;
        emp.raiseEligible = false;
      }
    });

    console.log("// Problem 5: Employees after applying raises");
    console.log(JSON.parse(JSON.stringify(company.employees)));

    // Problem 6: Add work-from-home status
    const wfhList = ['Anna', 'Sam'];
    company.employees.forEach(emp => {
      emp.wfh = wfhList.includes(emp.firstName);
    });

    console.log("// Problem 6: Employees after adding WFH status");
    console.log(JSON.parse(JSON.stringify(company.employees)));
  })
  .catch(error => {
    console.error("Error loading or processing the JSON:", error);
  });
