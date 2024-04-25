import useAuth from "./useAuth";



const useRefreshToken =  () => {
    
    const {auth,setAuth} = useAuth();

    const refresh = async () => {
        const response = await fetch('http://medclinic-420017.uc.r.appspot.com/api/v1/auth/refreshToken',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify({token: auth?.refreshToken})
        });
        const data = await response.json();
        setAuth(prev => {
            console.log(prev.accessToken);
            console.log(data.accessToken);
            return {
                ...prev,
                accessToken: data.accessToken,
            }
        })
       /*  console.log(data); */

        return data?.accessToken;
    }

    return refresh;

}



export default useRefreshToken;
