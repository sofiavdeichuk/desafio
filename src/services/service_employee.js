import EmployeeMethods from "../dao/methods/method_employee.js"

const employeeMethods = new EmployeeMethods()

class EmployeeService {

    createEmployee = async (employees) => {
        try {
            const saveEmployees = await Promise.all(
                employees.map((employee) => employeeMethods.createEmployee(employee))
            )
            return saveEmployees
        } catch (error) {
            throw new Error(error.message)
        }
    }

    getEmployees = async () => {
        try {
            return await employeeMethods.getEmployees()
        } catch (error) {
            throw new Error(error.message)
        }
    }

    getEmployeeById = async (id) => {
        try {
            return await employeeMethods.getEmployeeById(id)
        } catch (error) {
            throw new Error(error.message)
        }
    }
}

export default EmployeeService