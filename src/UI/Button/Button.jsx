import styles from './Button.module.scss';
import cn from 'classnames';
const Button = ({text,radius,handle,disabled}) => {

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
                className = { cn(styles.btn,btnClass)} 
                onClick = {handle}
                disabled = {disabled}>{text}</button>
        </>
    )
}



export default Button;