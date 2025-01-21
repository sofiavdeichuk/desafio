import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

const URL = process.env.MONGO_URL

const connect = async () => {
    try {
        await mongoose.connect(URL, {
            serverSelectionTimeoutMS: 30000,
            connectTimeoutMS: 45000,
        })
        console.log('DB Connected')
    } catch (error) {
        console.error('Error connecting DB: ', error)
    }
}

export default connect