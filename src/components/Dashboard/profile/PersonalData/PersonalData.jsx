import styles from './PersonalData.module.scss';
import Button from '../../../../UI/Button/Button';
import { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth.jsx';
import { HttpError } from '../../../../services/network.js';
import useRefreshToken from '../../../../hooks/useRefreshToken.jsx';

const PersonalData = () =>{

    const refresh = useRefreshToken();

    const {auth} = useAuth();
    const [personalInfo,setInfo] = useState({
        name: '',
        surName: '',
        email: '',
        telNumber: ''

    });
    const [text,setText] = useState('Редактировать');
    const [disabled,setDisabled] = useState(true);
 
    const editProfile = async () => {

        if(text == 'Редактировать'){

            setText('Обновить');
            setDisabled(false);
        }
        else {

            setText('Редактировать')
            setDisabled(true);

            const res = await fetch(`https://medclinic-422605.uc.r.appspot.com/api/v1/profile/edit`,{
                method: 'PUT',
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${auth.accessToken}`

                },
                body: JSON.stringify({...personalInfo})
            });
            const data = await res.json();
            console.log(data);

        }

    }

    const cancelEdit = () => {
        setText('Редактировать')
        setDisabled(true);
    }

    useEffect(() => {

        (async () => {
            try {
                const res = await fetch('https://medclinic-422605.uc.r.appspot.com/api/v1/profile',{
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',  
                        "Authorization": `Bearer ${auth.accessToken}`   
                    },
                })

                if(!res.ok) {
                    throw new HttpError(`Could not fetch https://medclinic-422605.uc.r.appspot.com/api/v1/profile`,res.status,res.message,res.ok);
                }
                
                const data = await res.json();

                setInfo(prev => ({
                    ...prev,
                    ...data
                }));
            }
            catch(error){
                console.error(error);
                if(error.status == 403){
                    await refresh();
                }
            }
            
            


        
        })();
    },[]);


    const {name,surName,email,telNumber} = personalInfo;

    return (
        <>
            <h3 className= {styles.header}>Ваши личные данные</h3>

            <div className= {styles.personals}>
                <div>
                    <input 
                        type='text'   
                        value = {name } 
                        onChange = {(e) => setInfo(prev => ({...prev,name: e.target.value}))}
                        disabled = {disabled}
                    />
                    <input 
                        type='text'   
                        value = {email } 
                        onChange = {(e) => setInfo(prev => ({...prev,email: e.target.value}))}
                        disabled = {disabled}
                        />
                </div>

                <div>
                    <input 
                        type='text' 
                        value = {surName } 
                        onChange = {(e) => setInfo(prev => ({...prev,surName: e.target.value}))}
                        disabled = {disabled}
                        />
                    <input  
                        type='text' 
                        value = {telNumber } 
                        onChange = {(e) => setInfo(prev => ({...prev,telNumber: e.target.value}))}
                        disabled = {disabled}
                        />
                </div>
            </div>
            <div className= {styles.btnPart}>
            <Button text = "НАЗАД" radius = "small" handle={cancelEdit} />
            <Button text = {`${text.toUpperCase()}`} radius = "small" handle={editProfile} />
            </div>
{/*             <button onClick = {() => { console.log(refresh()) }}>refrsh</button> */}
        </>
    )
}



export default PersonalData;


