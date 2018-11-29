const fs = require('fs');
const path = require('path');
var Employee = function (employee) {
    this.EmployeeName = employee.EmployeeName;
    this.FirstName = employee.FirstName;
    this.LastName = employee.LastName;
    this.PhoneNumber = employee.PhoneNumber;
    this.Address = employee.Address;
    this.Company = employee.Company;
    this.Designation = employee.Designation;
    this.HighestEducation = employee.HighestEducation;
};
Employee.createEmployee = function createEmployee(req, res) {    
    var newemployee = new Employee(req.body);
    fs.readFile(path.resolve(__dirname, './../data/employee.json'), (err, data) => {
        if (err)
            res.send(err);
        var employee = JSON.parse(data);       
        employee.employees.push(newemployee)
        fs.writeFile(path.resolve(__dirname, './../data/employee.json'), JSON.stringify(employee), (writeerr) => {
            if (writeerr)
                res.send(writeerr)
                res.send("Data Added");
        })
    })
}
Employee.getEmployee_with_id = function getEmployee_with_id(req, res) {
    fs.readFile(path.resolve(__dirname, './../data/employee.json'), (err, data) => {
        if (err)
            res.send(err);
        var employee = JSON.parse(data);
        const newEmployee = {
            "EmployeeName": "Madhav Reddy",
            "FirstName": "Madhav Reddy",
            "LastName": "dsa Reddy",
            "PhoneNumber": "sad",
            "Address": "das",
            "Company": "dsa",
            "Designation": "Dsa",
            "HighestEducation": "Dasd"
        }
        employee.employees.push(newEmployee)
        fs.writeFile(path.resolve(__dirname, './../data/employee.json'), JSON.stringify(employee), (writeerr) => {
            if (writeerr)
                res.send(writeerr)
        })
        res.send(data)
    })
}
module.exports = Employee;