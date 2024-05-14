import { request } from "./Axios";

export const GetAllApplications = async (token) => {
    console.log('application; ',token)
    try {
        
        const res = await request.get('api/v1/application/getAll', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log(res.data);
        return res.data;
    } catch (error) {
        console.log('err', error);
        throw error; 
    }
};

export const DeleteApplication = async (token, id) => {
    console.log('love; ', id)
    try {
        
        const res = await request.delete('api/v1/application', {
            id,
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log(res.data);
        return res.data;
    } catch (error) {
        console.log('err', error);
        throw error; 
    }
};

export const GetAllDoctors = async (token) => {
    console.log('doctors ',token)
    try {
        
        const res = await request.get('/api/v1/doctor/get-doctors', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log(res.data);
        return res.data;
    } catch (error) {
        console.log('err', error);
        throw error; 
    }
};