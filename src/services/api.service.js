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


const fetchAllUserAPI = (current, pageSize) => {
    const URL_BACKEND = `/api/v1/user?current=${current}&pageSize=${pageSize}`
    return axios.get(URL_BACKEND)
}

const handleUploadFile = (file, folder) => {
    const URL_BACKEND = `/api/v1/file/upload`
    const config = {
        headers: {
            "upload-type": folder,
            "Content-Type": "multipart/form-data"
        }
    }
    const bodyFormData = new FormData()
    bodyFormData.append("fileImg", file)

    return axios.post(URL_BACKEND, bodyFormData, config)
}

const updateUserAvatarAPI = (avatar, _id, fullName, phone) => {
    const URL_BACKEND = "/api/v1/user"
    const data = {
        _id: _id,
        avatar: avatar,
        fullName: fullName,
        phone: phone
    }
    return axios.put(URL_BACKEND, data)

}

const registerUserAPI = (fullName, email, password, phone) => {
    const URL_BACKEND = "/api/v1/user/register"
    const data = {
        fullName: fullName,
        email: email,
        password: password,
        phone: phone
    }
    return axios.post(URL_BACKEND, data)
}

const loginAPI = (email, password) => {
    const URL_BACKEND = "/api/v1/auth/login"
    const data = {
        username: email,
        password: password,
        delay: 2000
    }
    return axios.post(URL_BACKEND, data)
}

const getAccountAPI = () => {
    const URL_BACKEND = "/api/v1/auth/account"
    return axios.get(URL_BACKEND)
}

const logoutAPI = () => {
    const URL_BACKEND = "/api/v1/auth/logout"
    return axios.post(URL_BACKEND)
}

// -------------------------------------------------------------------------
const fetchAllBookAPI = (current, pageSize) => {
    const URL_BACKEND = `/api/v1/book?current=${current}&pageSize=${pageSize}`
    return axios.get(URL_BACKEND)
}

const createBookAPI = (thumbnail, mainText, author, price, quantity, category) => {
    const URL_BACKEND = "/api/v1/book"
    const data = {
        thumbnail: thumbnail,
        mainText: mainText,
        author: author,
        price: price,
        quantity: quantity,
        category: category

    }
    return axios.post(URL_BACKEND, data)

}





//--------------------------------------------------------------------------

export {
    creatUserAPI, updateUserAPI, fetchAllUserAPI, deleteUserAPI, handleUploadFile, updateUserAvatarAPI, registerUserAPI
    , loginAPI, getAccountAPI, logoutAPI, fetchAllBookAPI, createBookAPI

}