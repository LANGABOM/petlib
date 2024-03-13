import {add,sub} from "."
import {AUTH_KEY,AUTH_URL} from "./config"
import nqobile from "./modules/nqobile" // require('./modules/nqobile')
console.log(add(5, 8)) // 13
console.log(sub(5, 8)) // 5
console.log(nqobile("nqobile"))

console.log(AUTH_KEY,AUTH_URL)