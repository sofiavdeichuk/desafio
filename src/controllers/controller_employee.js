import EmployeeService from '../services/service_employee.js'
const employeeService = new EmployeeService()
import { generateEmployees } from '../faker/faker.js'

class EmployeeController {
    createEmployee = async (req, res) => {
        try {
            const count = req.query.count || 10
            const createEmployees = await generateEmployees(count)

            const saveEmployees = await employeeService.createEmployee(createEmployees)
            
            saveEmployees ? res.status(201).send({ message: 'Employees created successfully!', empleados: saveEmployees}) : res.status(400).send({ error: error.message })
        } catch (error) {
            res.status(500).send({ error: error.message })
        }
    }

    getEmployees = async (req, res) => {
        try {
            const employees = await employeeService.getEmployees()

            res.status(200).send({ empleados: employees })
        } catch (error) {
            res.status(500).send({ error: error.message })
        }
    }

    getEmployeeById = async (req, res) => {
        try {
            const ID = req.params.id
            const employee = await employeeService.getEmployeeById(ID)

            employee ? res.status(200).send({ empleado: employee }) : res.status(404).send({ message: 'Employee not found' })
        } catch (error) {
            res.status(500).send({ error: error.message })
        }
    }
}

export default EmployeeController