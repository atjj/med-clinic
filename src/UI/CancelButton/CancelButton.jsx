import styles from './CancelButton.module.scss';
import cn from 'classnames';
const CancelButton = ({text,radius,handle,disabled}) => {

    let btnClass = '';

     
    
    switch (radius) {
        case 'small':
            btnClass += `${styles.small}`;
            break;

        case 'medium':
            btnClass += `${styles.medium}`;
            break;
    
        default:
            btnClass += ``;
            break;
    }


    return(
        <>
            <button 
                className = {cn(styles.btn,btnClass)} 
                onClick   =  {handle}
                disabled  = {disabled}>
                    {text}
            </button>
        </>
    )
}



export default CancelButton;