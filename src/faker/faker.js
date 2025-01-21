import {faker} from '@faker-js/faker'

export const generateEmployees = async (count) => {
    const employees = []
    for(let i = 0; i < count; i++) {
        const employee = {
            // id: faker.string.uuid(),
            nombre: faker.person.fullName(),
            puesto: faker.person.jobTitle(),
            salario: faker.number.int({min: 400000, max: 2000000})
        }
        employees.push(employee)
    }
    return employees
}
