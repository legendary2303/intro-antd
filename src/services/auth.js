import axios from "axios";
import { ENV } from "../utils/constants";


const register = async (username,email,password) => {
    await axios.post(`${ENV.API_URL}/${ENV.ENDPOINTS.REGISTER}`,
                {
                    readername: username,
                    email: email,
                    password: password,
                    roles: ['PageGuardian']
                }
            );
}



const login =  async (username, password) => {
    return axios.post(`${ENV.API_URL}/${ENV.ENDPOINTS.LOGIN}`,
    {
        email: username,
        password: password
    }
);
}


export default {
    register,login
}