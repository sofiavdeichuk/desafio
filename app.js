import http from 'http'
import dotenv from 'dotenv'
import express from 'express'
import bodyParser from 'body-parser'
import session from 'express-session'
import MongoStore from 'connect-mongo'
import handlebars from 'express-handlebars'

dotenv.config()

// server
const app = express()
const server = http.createServer(app)
const port = 8080

// dirname
import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
app.use(express.static(path.join(__dirname, 'public')))

// JSON settings
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(bodyParser.json())

// handlebars
app.engine('handlebars', handlebars.engine())
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, 'src', 'views'))

// mongo
import connect from './src/dao/db/db.js'
const expireTime = 1000 * 60 * 60 * 2 // 2 horas
const mongoUrl = process.env.MONGO_URL
const mongoSecret = process.env.MONGO_SECRET

app.use(session({
    store: MongoStore.create({
        mongoUrl: mongoUrl
    }),
    secret: mongoSecret,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: expireTime
    }
}))

// routes
import EmployeeRoute from './src/routes/route_employee.js'
import FakerRoute from './src/routes/route_faker.js'

app.use('/empleados', EmployeeRoute)
app.use('/generate', FakerRoute)

server.listen(port, () => {
    console.log(`Server running on port ${port}`)
    connect()
})