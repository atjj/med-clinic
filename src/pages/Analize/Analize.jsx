import styles from './Analize.module.scss';
import container from '../../styles/ContainerStyles.module.scss'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Line from '../../UI/Line/Line.jsx';
import DB from './db.json'
import close from '../../assets/icons/close.svg'
import { useState } from 'react';

const Analize = () =>{

    const [searchValue,setSearchValue] =useState ('');
    const [isOpen,setIsOpen] =useState(true);

    const onChangeSearch = (event) =>{
        setSearchValue(event.target.value);
    }

    const filteredItems = DB.filter(item =>
        item.name.toLowerCase().includes(searchValue.toLowerCase()));

    const itemClick =(e) =>{
        setSearchValue(e.target.textContent)
        setIsOpen(!isOpen);
    };

    const inputClickHandler =()=>{
        setIsOpen(true);
    };
    
    return (
        <div className={container.container}>
            <div className={styles.analize}>
            <Line />
            <Breadcrumbs style={{marginTop: "30px"}} aria-label="breadcrumb">
                <Link underline="hover" color="#346EFB" href="/">
                Главная
                </Link>
                <Typography color="text.primary">Анализы</Typography>
            </Breadcrumbs>
          
            <div className={styles.searchBlock}>
               
                    <input onChange={onChangeSearch} 
                            value={searchValue}  
                            type="text" 
                            placeholder='Поиск по анализам' 
                            onClick={inputClickHandler} />
                    
                        <ul className={styles.autocomplete}>
                            {searchValue && isOpen
                            ? 
                                filteredItems.map((item,index)=>{
                                    return (
                                        <li  key={index}
                                        className={styles.autocompleteItem}
                                        onClick={itemClick}>
                                            {item.name}</li>
                                    )
                                }) : null }
                            
                        </ul>
                

                  {searchValue && (
                    <img width={25} height={25}
                      onClick={() => setSearchValue('')}
                      className="close"
                      src={close}
                      alt="Clear"
                      style={{cursor:'pointer'}}
                    />
                  )}
            </div>
                  
            <div className={styles.Allanalize}>
            <ul className={styles.twoColumn}>
                {filteredItems.map((item, index) => (
                    <Link to={`/analize/${item.name}`} key={index}>
                      <li>{item.name}</li>
                    </Link>
                ))}
                </ul>
            
            </div>

            </div>  
        </div>
    )
}

export default Analize ;
