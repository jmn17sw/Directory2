
import express from 'express'

import { getEmployees, addEmployee, getEmployeeById }  from './employees.js'
// import { addEmployee } from 'employees.js'
// import { getEmployeebyId } from 'employees.js'

const employeesRouter = express.Router();



// Note: this middleware has to come first! Otherwise, Express will treat
// "random" as the argument to the `id` parameter of /employees/:id.
// app.route("/employees/random").get((req, res) => {
//   const randomIndex = Math.floor(Math.random() * employees.length);
//   res.send(employees[randomIndex]);
// });

employeesRouter.post('/', (req, res, next) => {
  if(!req.body === undefined) {
    res.status(400).send('Request must have a body')
  } else if(!req.body.text) {
    res.status(400).send('Request must have a body')
  }
  const newEmployee = addEmployee(req.body.text);
  res.status(202).send(newEmployee)
})

employeesRouter.get('/', (req, res, next) => {
  const allEmployees = getEmployees()
  res.send(allEmployees);
});

employeesRouter.post("/employees", (req, res) => {
  res.send(employee);
});

employeesRouter.put('/employess/:id', (req, res) => {
  res.send(employeess)
});

employeesRouter.delete('/employees/:id', (req, res) => {
  res.send(employees)
});

employeesRouter.get("/employees/:id", (req, res) => {
  const { id } = req.params;

  // req.params are always strings, so we need to convert `id` into a number
  // before we can use it to find the employee
  const employee = employees.find((e) => e.id === +id);

  if (!employee) {
    return res.status(404).send("Employee not found");
  }

  res.send(employee);
});

export default employeesRouter

