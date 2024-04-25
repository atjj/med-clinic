export class HttpError extends Error {
    constructor(message,status,errText,ok) {
        super(message);
        this.status = status;
        this.errText = errText;
        this.ok = ok;
    }
}



export const fetchAuthData = async (data,auth) =>{


    try {
        
        const res = await fetch(`http://medclinic-420017.uc.r.appspot.com/api/v1/auth/${auth}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });



        
        if(!res.ok) {
            console.log(res);
            const handledRes = await res.json();
            const errText = res.status == '500' ? handledRes.error : handledRes.message
            throw new HttpError(`Could not fetch http://medclinic-420017.uc.r.appspot.com/api/v1/auth/${auth}`,res.status,errText,false);
        }
        
        return  await res.json();


    } catch(error){
    
        console.error(`message: ${error.message} status: ${error.status} errText: ${error.errText}`)
        return {
            status: error.status,
            errText: error.errText,
            ok: error.ok
        };
    }


}



