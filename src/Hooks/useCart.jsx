import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCart = () => {
    // tan stack query
    const axiosSecure = useAxiosSecure()
    const {user} = useAuth()
    const { refetch, data: cart = []} = useQuery({
        queryKey: ["bookedApartment", user.email],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/bookedApartment/${user.email}`)
            return res.data
        }
    })
    return [cart, refetch]
};

export default useCart;