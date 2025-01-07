// import axios from "axios";
import axios from './axios.customize'

const creatUserAPI = (fullName, email, passWord, phoneNumber) => {
    const URL_BACKEND = "/api/v1/user"
    const data = {
        fullName: fullName,
        email: email,
        password: passWord,
        phone: phoneNumber
    }
    return axios.post(URL_BACKEND, data)
}

const upadteUserAPI = () => {

}

const fetchAllUserAPI = () => {
    const URL_BACKEND = "/api/v1/user"
    return axios.get(URL_BACKEND)
}

export {
    creatUserAPI, upadteUserAPI, fetchAllUserAPI
}