import dotenv from 'dotenv'
dotenv.config()

console.log(process.env)
const {AUTH_KEY,AUTH_URL}=process.env
export {
    AUTH_KEY,
    AUTH_URL
}