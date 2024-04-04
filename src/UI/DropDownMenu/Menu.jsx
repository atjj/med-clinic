import styles from './Menu.module.scss';

const Menu  = ({obj,toggle,isOpen}) =>{




    return (
        <div className = {`${styles.wrapper} ${isOpen ? styles.active : ''}`}>
            <ul className= {styles.list}>
                {obj.map(({id,icon,title}) => 

                    <li onClick={() => {toggle(id)}} 
                        key = {id}
                    >
                        <img src= {icon} alt = {id}/>
                        {title}
                    </li>
                    
                    
                )}
            </ul>
        </div>
    )
}



export default Menu;