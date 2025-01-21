import EmployeeController from "../controllers/controller_employee.js"
const employeeController = new EmployeeController()
import { Router } from "express"
const router = new Router()

router.get('/', (req, res) => {
    const count = req.query.count || 10
    res.render('generate', {count})
})

router.post('/', employeeController.createEmployee)

export default router