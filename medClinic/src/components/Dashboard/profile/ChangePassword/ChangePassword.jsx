import styles from "./ChangePassword.module.scss";

import Button from "../../../../UI/Button/Button";
const ChangePassword = () =>{
    return(
        <>
            <h3 className= {styles.header}>Смена пароля</h3>

            <div className= {styles.inputs}>
                <div className= {styles.inputWrapper}>
                    <label>Старый пароль</label>
                    <input placeholder="Введите пароль"/>
                </div>

                <div className= {styles.inputWrapper}>
                    <label>Новый пароль</label>
                    <input placeholder="Введите новый пароль"/>
                </div>

                <div className= {styles.inputWrapper}>
                    <label>Потвердить новый пароль</label>
                    <input placeholder="Потвердите пароль"/>
                </div>
            </div>

            <div className= {styles.btnPart}>
                <Button text = "НАЗАД" radius = "small" />
                <Button text = "ПОТВЕРДИТЬ" radius = "small" />
            </div>
        
        </>
    )
}



export default ChangePassword;