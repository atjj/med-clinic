import styles from './Button.module.scss';
const Button = ({toggleMenu,icon}) =>{
    return (

        <button 
                onClick = {toggleMenu}
                className= {styles.btn}>
                    <img src = {icon}/>
        </button>

    )
}



export default Button;