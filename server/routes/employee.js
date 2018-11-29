const express=require('express');
const router=express.Router();
const employee=require('./../route_handlers/Employee');

router.get('/employees');
router.route('/employee/:ID').get(employee.getEmployee_with_id).delete(employee.deleteEmployee_with_ID).put(employee.updateEmployee_with_ID);
router.post('/employee',employee.createEmployee);
module.exports=router