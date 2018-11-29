import React, { Component } from 'react';
import './App.css';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      EmployeeName: '', FirstName: '', LastName: '', PhoneNumber: '', Address: '',
      Company: '',
      Designation: '', HighestEducation: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmitClick = this.handleFormSubmitClick.bind(this);
  }
  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleFormSubmitClick(event) {
    const Employee = {
      EmployeeName: this.state.EmployeeName,
      FirstName: this.state.FirstName,
      LastName: this.state.LastName,
      PhoneNumber: this.state.PhoneNumber,
      Address: this.state.Address,
      Company: this.state.Company,
      Designation: this.state.Designation,
      HighestEducation: this.state.HighestEducation
    }
    axios.post("http://localhost:8080/employee",Employee).then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })


  }
  render() {

    return (
      <div className="App">
        <TextField label="Employee Name" name="EmployeeName" onChange={this.handleInputChange} />
        <TextField label="First Name" name="FirstName" onChange={this.handleInputChange} />
        <TextField label="Last Name" name="LastName" onChange={this.handleInputChange} />
        <TextField label="Phone Number" name="PhoneNumber" onChange={this.handleInputChange} />
        <TextField label="Address" multiline rows={4} name="Address" onChange={this.handleInputChange} />
        <TextField label="Company" name="Company" onChange={this.handleInputChange} />
        <TextField label="Designation" name="Designation" onChange={this.handleInputChange} />
        <TextField label="HighestEducation" name="HighestEducation" onChange={this.handleInputChange} />
        <br />
        <PrimaryButton text="Submit" onClick={this.handleFormSubmitClick} />
      </div>
    )
  }
}

export default App;
