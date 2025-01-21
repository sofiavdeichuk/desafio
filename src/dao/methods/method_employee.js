import Employee from '../models/model_employee.js'

class EmployeeMethods {
    createEmployee = (data) => {
        const employee = new Employee(data)
        return employee.save()
    }

    getEmployees = async () => {
        return await Employee.find().lean()
    }

    getEmployeeById = async (id) => {
        return await Employee.findOne({ _id: id })
    }
}

export default EmployeeMethods  