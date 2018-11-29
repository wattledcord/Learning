const express=require('express');
const router=express.Router();
const employee=require('./../route_handlers/Employee');

router.get('/employees');
router.route('/employee/:id').get(employee.getEmployee_with_id).delete().put();
router.post('/employee',employee.createEmployee);
module.exports=router