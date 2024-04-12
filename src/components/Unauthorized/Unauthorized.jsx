import useAuth from "../../hooks/useAuth";
import {Navigate} from 'react-router-dom';


const Unauthorized = ({children}) =>{
    const {auth} = useAuth();
    return auth?.email ? children : <Navigate to = {'/'} replace/>

}

export default Unauthorized;