import dotenv from 'dotenv'
dotenv.config()
const {AUTH_KEY,AUTH_URL}=process.env
export {
    AUTH_KEY,
    AUTH_URL
}