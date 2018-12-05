import React, { Component } from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { Snackbar, Paper } from '@material-ui/core';
import MySnackbarContentWrapper from '../components/MySnackbarContentWrapper';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      EmployeeName: '', FirstName: '', LastName: '', PhoneNumber: '', Address: '',
      Company: '',
      Designation: '', HighestEducation: '', snackmsg: '', snackopen: false, snackvariant: '', txterr: false
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmitClick = this.handleFormSubmitClick.bind(this);
    this.handleSnackClose = this.handleSnackClose.bind(this);
  }
  handleInputChange(event) {
    if(event.target.name=='EmployeeName'|| event.target.name=='FirstName'){
      this.setState({ [event.target.name]: event.target.value ,txterr:false});
    }else
    this.setState({ [event.target.name]: event.target.value });
    
  }
  handleSnackClose() {
    this.setState({
      snackopen: false
    })
  }
  handleFormSubmitClick(event) {
    if (this.state.EmployeeName == '' || this.state.FirstName == '') {
      this.setState({
        snackmsg: 'Enter vaild Data',
        snackvariant: 'error', snackopen: true, txterr: true
      })
    } else {
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
        this.setState({
          snackopen: true, snackmsg: res.data, snackvariant: 'info', EmployeeName: '', FirstName: '', LastName: '',
          PhoneNumber: '', Company: '', Address: '', Designation: '', HighestEducation: ''
        });
      }).catch((err) => {
        this.setState({ snackmsg: err, snackvariant: 'error', snackopen: true })
      })

    }

  }
  render() {

    return (
      <div className="App">
        <Paper elevation={1} style={{padding:'10px'}}>
          <form>
            <TextField error={this.state.txterr} value={this.state.EmployeeName} label="Employee Name" name="EmployeeName" required onChange={this.handleInputChange} fullWidth variant="outlined" margin="dense" />
            <TextField error={this.state.txterr} label="First Name" name="FirstName" onChange={this.handleInputChange} required fullWidth variant="outlined" margin="dense" />
            <TextField label="Last Name" name="LastName" onChange={this.handleInputChange} fullWidth variant="outlined" margin="dense" />
            <TextField label="Phone Number" name="PhoneNumber" onChange={this.handleInputChange} fullWidth variant="outlined" margin="dense" />
            <TextField label="Address" multiline rows={4} name="Address" onChange={this.handleInputChange} fullWidth variant="outlined" margin="dense" />
            <TextField label="Company" name="Company" onChange={this.handleInputChange} fullWidth variant="outlined" margin="dense" />
            <TextField label="Designation" name="Designation" onChange={this.handleInputChange} fullWidth variant="outlined" margin="dense" />
            <TextField label="HighestEducation" name="HighestEducation" onChange={this.handleInputChange} fullWidth variant="outlined" margin="dense" />
            <Button onClick={this.handleFormSubmitClick} color="primary" variant="contained" fullWidth>Submit</Button>
          </form>
        </Paper>
        <Snackbar anchorOrigin={{
          vertical: 'top', horizontal: 'center'
        }} open={this.state.snackopen} autoHideDuration={1000} onClose={this.handleSnackClose}

        >
          <MySnackbarContentWrapper
            message={this.state.snackmsg} onClose={this.handleSnackClose} variant={this.state.snackvariant}></MySnackbarContentWrapper>
        </Snackbar>
      </div>
    )
  }
}

export default App;
