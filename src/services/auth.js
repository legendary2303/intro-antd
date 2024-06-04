import axios from "axios";


const register = async (username,email,password) => {
    await axios.post('https://api-books-omega.vercel.app/getin/signUp',
                {
                    readername: username,
                    email: email,
                    password: password,
                    roles: ['PageGuardian']
                }
            );
}



const login =  async (username, password) => {
    return axios.post('https://api-books-omega.vercel.app/getin/signin',
    {
        email: username,
        password: password
    }
);
}


export default {
    register,login
}