"use strict";
class Employee {
    constructor(empName, empTitle, empDepartment, empSalary) {
        this.name = empName;
        this.title = empTitle;
        this.department = empDepartment;
        this.salary = empSalary;
    }
    printSalary() {
        return `$${this.salary}`;
    }
    printDetails() {
        return `${this.name} is a ${this.title} in the ${this.department} with a salary of ${this.printDetails}.`;
    }
}
let jimbo = new Employee('Jimbo', 'Lifeguard', 'Aquatics', 30000);
function printEmployee(callEmp) {
    console.log(callEmp.printDetails());
}
printEmployee(jimbo);
