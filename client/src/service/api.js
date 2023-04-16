import axios from 'axios';

// const url ='http://localhost:8000'|| 'https://klipcart-database.onrender.com';
const URL ='https://klipcart-database.onrender.com';



export const authenticateSignup = async (data) => {
    try {
        return await axios.post(`${URL}/signup`, data)
    } catch (error) {
        console.log('Error while calling Signup API: ', error);
    }
}
export const authenticateLogin = async (data) => {
    try {
        return await axios.post(`${URL}/login`, data)
    } catch (error) {
        console.log('Error while calling login API: ', error);
        return error.response;
    }
}