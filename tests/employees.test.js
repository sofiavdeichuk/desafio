import { expect } from 'chai'
import supertest from 'supertest'

const api = supertest('http://localhost:8080')

describe('Testing API', function () {
    this.timeout(15000)

    // Test 01
    it('POST /generate: Debe generar 10 empleados ficticios', async function () {
        const result = await api.post('/generate')

        expect(result.statusCode).to.equal(201)
        expect(result.body).to.be.an('object')
        expect(result.body.empleados).to.be.an('array')
        expect(result.body.empleados).to.have.lengthOf.at.least(10)
        expect(result.body.message).to.equal('Employees created successfully!')
    })

    // Test 02
    it('POST /generate?count=N: Debe generar N empleados ficticios', async function () {
        const count = Math.floor(Math.random() * 30) + 1
        const result = await api.post(`/generate?count=${count}`)

        expect(result.statusCode).to.equal(201)
        expect(result.body).to.be.an('object')
        expect(result.body.empleados).to.be.an('array')
        expect(result.body.empleados).to.have.lengthOf.at.least(count)
        expect(result.body.message).to.equal('Employees created successfully!')
    })

    // Test 03
    it(' GET /empleados: Debe retornar los datos de los empleados registrados en la BBDD', async function () {
        const result = await api.get('/empleados')

        expect(result.statusCode).to.equal(200)
        expect(result.body).to.be.an('object')
        expect(result.body.empleados).to.be.an('array')
        expect(result.body.empleados).to.have.lengthOf.at.least(1)
    })

    // Test 04
    it(' GET /empleados/:id: Debe retornar los datos de un empleado mediante su ID', async function () {
        // Creamos un empleado
        const createResult = await api.post('/generate?count=1')
        expect(createResult.statusCode).to.equal(201)
        expect(createResult.body).to.be.an('object')
        expect(createResult.body.message).to.equal('Employees created successfully!')

        // Obtenemos el ID del empleado creado
        const getResult = await api.get('/empleados')
        expect(getResult.statusCode).to.equal(200)
        expect(getResult.body).to.be.an('object')
        expect(getResult.body.empleados).to.be.an('array')
        expect(getResult.body.empleados).to.have.lengthOf.at.least(1)

        const employeeId = getResult.body.empleados[0]._id

        // Usamos el ID para obtener el empleado por ID
        const result = await api.get(`/empleados/${employeeId}`)
        expect(result.statusCode).to.equal(200)
        expect(result.body).to.be.an('object')
        expect(result.body.empleado).to.have.property('_id').that.equals(employeeId)
    })

    // Test 05
    it(' GET /empleados/:id: Enviamos un ID no existente y debe retornar error', async function () {
        const employeeId = '60f3d1c4d6d3f8b3a8b4b1e3'
        const result = await api.get(`/empleados/${employeeId}`)

        expect(result.statusCode).to.equal(404)
    })
})