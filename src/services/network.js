export const signIn = async (email,password) =>{

    try {
        
        const res = await fetch('http://medcheck-415904.ey.r.appspot.com/api/v1/auth/sign-in',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email,password})
        });


        if(!res.ok) {
            console.error('Could not fetch', res.status);
            return false;
        }
        
        return  await res.json();

    } catch(error){
        console.error('Could not fetch', error.message);
        console.log(error)
        return false;
    }


}


export const signUp = async (data) => {
    try {
        const res = await fetch('http://medcheck-415904.ey.r.appspot.com/api/v1/auth/sign-up',{
            method: 'POST',
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        });

        if(!res.ok) {
            console.error('Could not fetch', res.status);
            return false;
        }
        
        return  await res.json();
    }
    catch(error){
        console.error('Could not fetch', error.message);
        console.log(error)
        return false;
    }

}