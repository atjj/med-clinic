import {createContext,useState} from 'react';


const AuthContext = createContext({});


export const AuthProvider = ({children}) => {


    const [auth,setAuth] = useState({});
    const [signUpConfirm,setSignUpConfirm] = useState({});
    
    console.log(auth);


    
    return (
        <AuthContext.Provider value={{auth,setAuth,signUpConfirm,setSignUpConfirm}}>
            {children}
        </AuthContext.Provider>
    )


}

export default AuthContext;