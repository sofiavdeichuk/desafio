import { Schema, model } from "mongoose"

const EmployeeSchema = new Schema ({
    nombre: {
        type: String,
        required: true
    },
    puesto: {
        type: String,
        required: true
    },
    salario: {
        type: Number,
        required: true
    }
})

const Employee = model('Empleado', EmployeeSchema)
export default Employee