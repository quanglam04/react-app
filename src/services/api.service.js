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

const updateUserAPI = (_id, fullName, phoneNumber) => {
    const URL_BACKEND = "/api/v1/user"
    const data = {
        _id: _id,
        fullName: fullName,
        phone: phoneNumber
    }
    return axios.put(URL_BACKEND, data)
}

const deleteUserAPI = (id) => {
    const URL_BACKEND = `/api/v1/user/${id}`
    return axios.delete(URL_BACKEND)
}


const fetchAllUserAPI = () => {
    const URL_BACKEND = "/api/v1/user"
    return axios.get(URL_BACKEND)
}

export {
    creatUserAPI, updateUserAPI, fetchAllUserAPI, deleteUserAPI
}