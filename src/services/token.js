import { ENV } from "../utils/constants";

//funcion para alamacenar el token en el local storage
const setToken = (token) => {
    localStorage.setItem(ENV.STORAGE.TOKEN,token);
}

//funcion para obtener el token del local storage

const getToken = () => {
    return localStorage.getItem(ENV.STORAGE.TOKEN);
}


//funcion para eliminar el token de local Storage

const removeToken = () => {
    localStorage.removeItem(ENV.STORAGE.TOKEN);
}

export const storageController = {
    setToken,
    getToken,
    removeToken
}