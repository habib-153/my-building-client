import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

export const axiosSecure = axios.create({
    baseURL: 'https://assignment-12-category-0011-serve-side.vercel.app'
    // baseURL: 'https://assignment-12-category-0011-serve-side.vercel.app'
})
const useAxiosSecure = () => {
    const navigate = useNavigate()
    const {logOut} = useAuth()

    // request interceptors to add authorization header for every secure api
    axiosSecure.interceptors.request.use(function(config){
        const token = localStorage.getItem('access-token')
        //console.log('request stopped by interceptors', token)
        config.headers.authorization = `Bearer ${token}`
        return config
    }, function(error){
        return Promise.reject(error)
    })

    // intercepts 401,403
    axiosSecure.interceptors.response.use(function(response){
        return response
    }, async (error) => {
        const status = error.response.status
        if(status === 401 || status === 403){
            await logOut()
            navigate('/login')
        }
        return Promise.reject(error)
    })
    return axiosSecure
};

export default useAxiosSecure;