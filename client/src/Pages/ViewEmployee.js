import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import axios from 'axios';
import Paper from "@material-ui/core/Paper";
import { Table, TableBody, TableRow, TableCell, TextField, Button, Snackbar, IconButton} from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import green from '@material-ui/core/colors/green';
import amber from '@material-ui/core/colors/amber';
import { withStyles } from '@material-ui/core/styles';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/Warning';
const variantIcon = {
    success: CheckCircleIcon,
    warning: WarningIcon,
    error: ErrorIcon,
    info: InfoIcon,
  };
  const styles1 = theme => ({
    success: {
      backgroundColor: green[600],
    },
    error: {
      backgroundColor: theme.palette.error.dark,
    },
    info: {
      backgroundColor: theme.palette.primary.dark,
    },
    warning: {
      backgroundColor: amber[700],
    },
    icon: {
      fontSize: 20,
    },
    iconVariant: {
      opacity: 0.9,
      marginRight: theme.spacing.unit,
    },
    message: {
      display: 'flex',
      alignItems: 'center',
    },
  });
function MySnackbarContent(props){
    const {classes,className,message,onClose,variant,...other}=props;
    const Icon= variantIcon[variant];
    return (
        <SnackbarContent
          className={classNames(classes[variant], className)}
          aria-describedby="client-snackbar"
          message={
            <span id="client-snackbar" className={classes.message}>
              <Icon className={classNames(classes.icon, classes.iconVariant)} />
              {message}
            </span>
          }
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={onClose}
            >
              <CloseIcon className={classes.icon} />
            </IconButton>,
          ]}
          {...other}
        />
      );
}  
MySnackbarContent.propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    message: PropTypes.node,
    onClose: PropTypes.func,
    variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired,
  };
  
  const MySnackbarContentWrapper = withStyles(styles1)(MySnackbarContent);

class ViewEmployee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            EmployeeName: '', FirstName: '', LastName: '', PhoneNumber: '', Address: '',
            Company: '',
            Designation: '', HighestEducation: '',
            ID: '', snackopen: false, snackmsg: ''
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
                        snackopen: true
                    })
                else {
                    this.setState({
                        snackmsg: response.data,
                        EmployeeName: '', FirstName: '', LastName: '',
                        PhoneNumber: '', Address: '',
                        Company: '', Designation: '',
                        HighestEducation: '',
                        snackopen: true
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
                    vertical: 'top',
                    horizontal: 'center'
                }} open={this.state.snackopen} autoHideDuration={1000}
                    message={this.state.snackmsg}
                    onClose={this.handleSnackClose}
                    action={[<IconButton key="close" color="inherit" onClick={this.handleSnackClose}>                    
                    <CloseIcon/>
                    </IconButton>]}                    
                >
                <MySnackbarContentWrapper message={this.state.snackmsg} onClose={this.handleSnackClose} variant="error">

                </MySnackbarContentWrapper>
                </Snackbar>
            </div>
        )
    }
}

export default ViewEmployee;