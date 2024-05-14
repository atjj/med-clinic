import {createContext,useState} from 'react';
import { useEffect } from 'react';


const AuthContext = createContext({});


export const AuthProvider = ({children}) => {


    const [auth,setAuth] = useState({});
    const [signUpConfirm,setSignUpConfirm] = useState({});
    
    useEffect(()=>{
        console.log('axaxa', auth);
        localStorage.setItem('aimosh', auth.accessToken)
    },[auth])


    
    return (
        <AuthContext.Provider value={{auth,setAuth,signUpConfirm,setSignUpConfirm}}>
            {children}
        </AuthContext.Provider>
    )


}

export default AuthContext;