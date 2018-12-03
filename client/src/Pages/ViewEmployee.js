import React, { Component } from 'react';
import axios from 'axios';
import Paper from "@material-ui/core/Paper";
import {  Table, TableBody, TableRow, TableCell, TextField, Button, Snackbar } from '@material-ui/core';

class ViewEmployee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            EmployeeName: '', FirstName: '', LastName: '', PhoneNumber: '', Address: '',
            Company: '',
            Designation: '', HighestEducation: '',
            ID: '',snackopen:false,snackmsg:''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmitClick = this.handleFormSubmitClick.bind(this);
    }
    handleInputChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
    handleFormSubmitClick(event) {
        const url = `http://localhost:8080/employee/${this.state.ID}`;
        axios.get(url).then((response) => {
            if (response.data.EmployeeName)
                this.setState({
                    EmployeeName: response.data.EmployeeName, FirstName: response.data.FirstName, LastName: response.data.LastName,
                    PhoneNumber: response.data.PhoneNumber, Address: response.data.Address,
                    Company: response.data.Company, Designation: response.data.Designation,
                    HighestEducation: response.data.HighestEducation
                })
            else{                
                console.log(response.data)
                this.setState({
                    snackmsg:response.data,
                    EmployeeName: '', FirstName: '', LastName: '',
                    PhoneNumber: '', Address: '',
                    Company: '', Designation: '',
                    HighestEducation: ''
                })
this.setState({
    snackopen:true
})
            }
                
        })
    }
    componentWillMount() {

    }
    render() {
        return (
            <div>
                <form>
                    <TextField label="Employee ID" name="ID" required onChange={this.handleInputChange} fullWidth variant="outlined" margin="normal" />
                    <Button onClick={this.handleFormSubmitClick} color="primary" variant="contained" fullWidth>Submit</Button>
                </form>
                <br />
                <Paper>
                    <Table >
                        <TableBody>
                            <TableRow>
                                <TableCell>Employee Name</TableCell>
                                <TableCell>{this.state.EmployeeName}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>First Name</TableCell>
                                <TableCell>{this.state.FirstName}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Last Name</TableCell>
                                <TableCell>{this.state.LastName}</TableCell>
                                </TableRow>
                                <TableRow>
                                <TableCell>Phone Number</TableCell>
                                <TableCell>{this.state.PhoneNumber}</TableCell>
                                </TableRow>
                                <TableRow>
                                <TableCell>Address</TableCell>
                                <TableCell>{this.state.Address}</TableCell>
                                </TableRow>
                                <TableRow>
                                <TableCell>Company</TableCell>
                                <TableCell>{this.state.Company}</TableCell>
                                </TableRow>
                                <TableRow>
                                <TableCell>Designation</TableCell>
                                <TableCell>{this.state.Designation}</TableCell>
                                </TableRow>
                                <TableRow>
                                <TableCell>Highest Education</TableCell>
                                <TableCell>{this.state.HighestEducation}</TableCell>
                                </TableRow>

                        </TableBody>
                    </Table>
                </Paper>
                <Snackbar anchorOrigin={{
                    vertical:'top',
                    horizontal:'center'
                    
                }} open={this.state.snackopen} autoHideDuration={1000}
                ></Snackbar>
            </div>
        )
    }
}
export default ViewEmployee;