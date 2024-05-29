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
    console.log('id; ', id)
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




export const AddDoctors = async (token) => {
    console.log('application; ',token)
    try {

        const res = await request.post('api/v1/doctor/add-doctor', {
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
