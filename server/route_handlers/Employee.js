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
        var lastID = employee.employees[employee.employees.length - 1].employeeID;
        newemployee.employeeID = lastID + 1;
        employee.employees.push(newemployee)
        fs.writeFile(path.resolve(__dirname, './../data/employee.json'), JSON.stringify(employee), (writeerr) => {
            if (writeerr)
                res.send(writeerr)
            res.send("Data Added");
        })
    })
}
Employee.updateEmployee_with_ID=function updateEmployee_with_ID(req,res){
    var employeeID = req.params.ID;
    var newemployee=new Employee(req.body);
    fs.readFile(path.resolve(__dirname, './../data/employee.json'), (err, data) => {
        if (err)
            res.send(err);
        var employee = JSON.parse(data);
        var elementIndex=null;
        employee.employees.forEach((element,index) => {            
            if (element.employeeID == employeeID){                
                elementIndex=index;
            }                
        });
            var entries=Object.entries(newemployee);
            for(const [feild,value] of entries){
                employee.employees[elementIndex][feild]=value;
            }        
        fs.writeFile(path.resolve(__dirname, './../data/employee.json'), JSON.stringify(employee), (writeerr) => {
            if (writeerr)
                res.send(writeerr)
            res.send("Element Changed");
        })
    })
}
Employee.getEmployee_with_id = function getEmployee_with_id(req, res) {
    var employeeID = req.params.ID;    
    fs.readFile(path.resolve(__dirname, './../data/employee.json'), (err, data) => {
        if (err)
            res.send(err);
        var employee = JSON.parse(data);
        var resemployee=null;
        employee.employees.forEach((element) => {            
            if (element.employeeID == employeeID)            
                resemployee=element;
        });
        if(resemployee)
        res.send(resemployee);
        else
        res.send(`No employee with ID:${employeeID} found`);
    })
}
Employee.deleteEmployee_with_ID=function deleteEmployee_with_ID(req,res){
    var employeeID = req.params.ID;    
    fs.readFile(path.resolve(__dirname, './../data/employee.json'), (err, data) => {
        if (err)
            res.send(err);
        var employee = JSON.parse(data);
        var deleteIndex=null;
        employee.employees.forEach((element,index) => {            
            if (element.employeeID == employeeID){                
                deleteIndex=index;
            }
                
        });
        if(deleteIndex){
            employee.employees.splice(deleteIndex,1);    
            fs.writeFile(path.resolve(__dirname, './../data/employee.json'), JSON.stringify(employee), (writeerr) => {
                if (writeerr)
                    res.send(writeerr)
                res.send("Deleted Successfully");
            })        
        }else{
            res.send(`No employee with ID:${employeeID} found`);
        }        
        
    })
}
module.exports = Employee;