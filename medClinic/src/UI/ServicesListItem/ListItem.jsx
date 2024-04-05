import styles from './ListItem.module.scss';

const ListItem = ({img,alt,text}) => {
    
    return (
        <div className= {styles.servicesItem}>
            <img src={img} alt = {alt}/> 
            <span>{text}</span>
        </div>
    )
}



export default ListItem;