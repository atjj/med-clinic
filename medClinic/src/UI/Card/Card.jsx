import styles from './Card.module.css'
// eslint-disable-next-line react/prop-types
const Card  = ({title,subtitle,text}) =>{
    return(
        <div className= {styles.card}>
            <div className= {styles.title}>{title}</div>
            <div className= {styles.subtitle}>{subtitle}</div>
            <div className= {styles.text}>{text}</div>
        </div>
    )
}



export default Card;