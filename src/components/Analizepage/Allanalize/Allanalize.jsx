import styles from './Allanalize.module.scss'
import DB from './db.json'
import cart from '../../../assets/icons/cart.svg';
import addCart from '../../../assets/icons/addCart.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Allanalize =()=>{
    const [icon,setIcon]=useState(false);
    const  addToCart =()=>{
        setIcon(!icon)
    }
    console.log(icon)
    return (
        <div className={styles.Allanalize}>
            {
                DB.map((item,index)=>
                    <div  key={index} className={styles.borderCard}>
                        {/* <div className={styles.inCard}> */}
                         <Link to={`/analize/${item.name}`} className={styles.leftAnalize}><h3>{item.name}</h3></Link>
                            <div className={styles.rightAnalize}>
                                <div className={styles.prices}>
                                    <p className={styles.priceTitle}>Цена:</p>
                                    <div  className={styles.price}>{item.price}</div>
                                </div>
                           <div ><img onClick={addToCart} style={{width:'40px' ,height:'40px'}} src={ icon ? addCart : cart} alt="cart" /></div>
                            </div>
                         {/* </div> */}
                    </div>
                )
            }
        </div>
    )
}
export default Allanalize