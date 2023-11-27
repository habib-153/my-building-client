/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useMember from "../Hooks/useMember";

const MemberRoute = ({children}) => {
    const {user, loading} = useAuth()
    const [isMember, isMemberLoading] = useMember()
    const location = useLocation()

    if(loading || isMemberLoading){
        return <div className="text-5xl mt-4 w-full text-center">
            <span className="loading my-[20%] loading-dots loading-lg"></span>
        </div>
    }
    if(user && isMember){
        return children
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default MemberRoute;