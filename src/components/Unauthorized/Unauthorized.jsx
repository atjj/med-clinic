import useAuth from "../../hooks/useAuth";
import {Navigate} from 'react-router-dom';


const Unauthorized = ({children,allowedRoles}) =>{
    const {auth} = useAuth();
    return (auth?.email && auth.roles === allowedRoles) ? children : <Navigate to = {'/'} replace/>

}

export default Unauthorized;