import EmployeeController from "../controllers/controller_employee.js"
const employeeController = new EmployeeController()
import { Router } from "express"
const router = new Router()

router.post('/generate', employeeController.createEmployee)

router.get('/', employeeController.getEmployees)

router.get('/:id', employeeController.getEmployeeById)


export default router