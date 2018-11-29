import React, { Component } from 'react';
import axios from 'axios';
class ViewEmployee extends Component{
    constructor(props){
        super(props);
        this.state = {
            EmployeeName: '', FirstName: '', LastName: '', PhoneNumber: '', Address: '',
            Company: '',
            Designation: '', HighestEducation: ''
          }
       
    }
    componentWillMount(){
        axios.get("http://localhost:8080/employee/1").then((response)=>{                       
            this.setState({EmployeeName:response.data.EmployeeName,FirstName:response.data.FirstName})
        })
    }
    render(){                
        return (
<div>{this.state.EmployeeName}-{this.state.FirstName}</div>
        )
    }
}
export default ViewEmployee;