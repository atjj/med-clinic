import styles from "./ChangePassword.module.scss";
import { useState } from "react";
import Button from "../../../../UI/Button/Button";
import useAuth from "../../../../hooks/useAuth";


const ChangePassword = () => {

    const {auth} = useAuth();
    const [oldPwd,setOldPwd] = useState('');
    const [newPwd,setNewPwd] = useState('');
    const [confirmPwd,setConfrimPwd] = useState('');
    const [message,setMessage] = useState('');

    

    const changePassword = async () =>{
        
        const res = await fetch(`https://medclinic-422605.uc.r.appspot.com/api/v1/change-password`,{
            method: 'PUT',
            headers: {
                'Content-Type':'application/json',
                'Authorization': `Bearer ${auth?.accessToken}` 
            },
            body: JSON.stringify({
                oldPassword: oldPwd,
                newPassword: newPwd
              })
        })
        console.log(res);
        if(!res.ok) {
            const data = await res.json();
            setMessage(data.message);
            return;

        } else {
            const data = await res.json();
            setOldPwd('');
            setNewPwd('');
            setConfrimPwd('');
            setMessage(data.message)
            console.log(data);
        }
    }

    return(
        <>
            <h3 className= {styles.header}>Смена пароля</h3>

            <div className= {styles.inputs}>
                <div className= {styles.inputWrapper}>
                    <label>Старый пароль</label>
                    <input
                        onChange={(e) => {setOldPwd(e.target.value)}} 
                        placeholder="Введите пароль"/>
                </div>

                <div className= {styles.inputWrapper}>
                    <label>Новый пароль</label>
                    <input
                        onChange={(e) => {setNewPwd(e.target.value)}} 
                        placeholder="Введите новый пароль"/>
                </div>

                <div className = {styles.inputWrapper}>
                    <label>Потвердить новый пароль</label>
                    <input
                        onChange = {(e) => { setConfrimPwd(e.target.value) }} 
                        placeholder = "Потвердите пароль"/>
                </div>
            </div>

            <div className= {styles.btnPart}>
                <Button text = "НАЗАД" radius = "small" />
                <Button text = "ПОТВЕРДИТЬ" radius = "small" handle={changePassword} disabled= {!(newPwd === confirmPwd) || (newPwd == '') || (confirmPwd == '') ? true : false}/>
            </div>
        
            <p>{message};</p>
        </>
    )
}



export default ChangePassword;