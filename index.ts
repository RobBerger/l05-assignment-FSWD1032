class Employee {
    protected name: string;
    protected title: string;
    protected department: string;
    protected salary: number;

    constructor(empName: string, empTitle: string, empDepartment: string, empSalary: number) {
        this.name = empName;
        this.title = empTitle;
        this.department = empDepartment;
        this.salary = empSalary;
    }

    printSalary(): string {
        return `$${this.salary}`;
    }

    printDetails(): string {
        console.log(`${this.name} is a ${this.title} in the ${this.department} with a salary of ${this.printDetails}.`);
    }
}

let jimbo: Employee = new Employee('Jimbo', 'Lifeguard', 'Aquatics', 30000);