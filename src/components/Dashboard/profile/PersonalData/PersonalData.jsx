import styles from './PersonalData.module.scss';
import Button from '../../../../UI/Button/Button';

const PersonalData = () =>{
    return (
        <>
            <h3 className= {styles.header}>Ваши личные данные</h3>

            <div className= {styles.personals}>
                <div>
                    <input type='text' disabled  value={"John"}/>
                    <input type='text' disabled value={"John@gmail.com"}/>
                </div>
                <div>
                    <input type='text' disabled value={"Taylor"}/>
                    <input type='text' disabled value={"+996(701) 010101"}/>
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