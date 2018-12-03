import React, { Component } from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
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
    axios.post("http://localhost:8080/employee", Employee).then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })


  }
  render() {

    return (
      <div className="App">        
          <form>
            <TextField label="Employee Name" name="EmployeeName" required onChange={this.handleInputChange} fullWidth variant="outlined" margin="normal" />
            <TextField label="First Name" name="FirstName" onChange={this.handleInputChange} required fullWidth variant="outlined" margin="normal"/>
            <TextField label="Last Name" name="LastName" onChange={this.handleInputChange} fullWidth variant="outlined" margin="normal"/>
            <TextField label="Phone Number" name="PhoneNumber" onChange={this.handleInputChange} fullWidth variant="outlined" margin="normal"/>
            <TextField label="Address" multiline rows={4} name="Address" onChange={this.handleInputChange} fullWidth variant="outlined" margin="normal"/>
            <TextField label="Company" name="Company" onChange={this.handleInputChange} fullWidth variant="outlined" margin="normal"/>
            <TextField label="Designation" name="Designation" onChange={this.handleInputChange} fullWidth variant="outlined" margin="normal"/>
            <TextField label="HighestEducation" name="HighestEducation" onChange={this.handleInputChange} fullWidth variant="outlined" margin="normal"/>
            <Button onClick={this.handleFormSubmitClick} color="primary" variant="contained" fullWidth>Submit</Button>
          </form>        
      </div>
    )
  }
}

export default App;
