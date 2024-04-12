import styles from './PersonalData.module.scss';
import Button from '../../../../UI/Button/Button';
import { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth.jsx';
const PersonalData = () =>{

    const {auth} = useAuth();
    const [personalInfo,setInfo] = useState({});

    useEffect(() =>{

        (async () =>{
            const response = await fetch('http://medclinic-420017.uc.r.appspot.com/api/v1/profile',{
                method: 'GET',
                headers: {
                    "Authorization": `Bearer ${auth.accessToken}`   
                }

            })
            .then(data => data.json())
            .then(res => res);

            setInfo(response);
        
        })();
    },[]);


    const {name,surName,email,telNumber} = personalInfo;

    return (
        <>
            <h3 className= {styles.header}>Ваши личные данные</h3>

            <div className= {styles.personals}>
                <div>
                    <input type='text' disabled  value={name}/>
                    <input type='text' disabled value={email}/>
                </div>
                <div>
                    <input type='text' disabled value={surName}/>
                    <input type='text' disabled value={telNumber}/>
                </div>
            </div>
            <div className= {styles.btnPart}>
            <Button text = "НАЗАД" radius = "small" />
            <Button text = "РЕДАКТИРОВАТЬ" radius = "small" />
            </div>
        
        </>
    )
}



export default PersonalData;