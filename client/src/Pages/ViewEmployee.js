import React, { Component } from 'react';
import MySnackbarContentWrapper from './../components/MySnackbarContentWrapper';
import axios from 'axios';
import Paper from "@material-ui/core/Paper";
import { Table, TableBody, TableRow, TableCell, TextField, Button, Snackbar, IconButton} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
class ViewEmployee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            EmployeeName: '', FirstName: '', LastName: '', PhoneNumber: '', Address: '',
            Company: '',
            Designation: '', HighestEducation: '',
            ID: '', snackopen: false, snackmsg: '',snackvariant:'',txterr:false
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmitClick = this.handleFormSubmitClick.bind(this);
        this.handleSnackClose=this.handleSnackClose.bind(this);
    }
    handleInputChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
    handleSnackClose(event) {
        this.setState({
            snackopen: false
        })
    }
    handleFormSubmitClick(event) {
        if(this.state.ID==''){
            this.setState({
                snackmsg:'Enter valid data',snackvariant:'error',snackopen:true,txterr:true
            })
        }
        const url = `http://localhost:8080/employee/${this.state.ID}`;
        axios.get(url).then((response) => {
            if (response.data.EmployeeName)
                this.setState({
                    EmployeeName: response.data.EmployeeName, FirstName: response.data.FirstName, LastName: response.data.LastName,
                    PhoneNumber: response.data.PhoneNumber, Address: response.data.Address,
                    Company: response.data.Company, Designation: response.data.Designation,
                    HighestEducation: response.data.HighestEducation
                })
            else {
                if (response.data.EmployeeName == '')
                    this.setState({
                        snackmsg: "No Data available",
                        EmployeeName: '', FirstName: '', LastName: '',
                        PhoneNumber: '', Address: '',
                        Company: '', Designation: '',
                        HighestEducation: '',
                        snackopen: true,snackvariant:'error'
                    })
                else {
                    this.setState({
                        snackmsg: response.data,
                        EmployeeName: '', FirstName: '', LastName: '',
                        PhoneNumber: '', Address: '',
                        Company: '', Designation: '',
                        HighestEducation: '',
                        snackopen: true,snackvariant:'info'
                    })
                }
            }

        })
    }
    componentWillMount() {

    }
    render() {
        return (
            <div>
                <form>
                    <TextField error={this.state.txterr} label="Employee ID" name="ID" required onChange={this.handleInputChange} fullWidth variant="outlined" margin="normal" />
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
                    vertical: 'top',
                    horizontal: 'center'
                }} open={this.state.snackopen} autoHideDuration={1000}
                    message={this.state.snackmsg}
                    onClose={this.handleSnackClose}
                    action={[<IconButton key="close" color="inherit" onClick={this.handleSnackClose}>                    
                    <CloseIcon/>
                    </IconButton>]}                    
                >
                <MySnackbarContentWrapper message={this.state.snackmsg} onClose={this.handleSnackClose} variant={this.state.snackvariant}>

                </MySnackbarContentWrapper>
                </Snackbar>
            </div>
        )
    }
}

export default ViewEmployee;