import container from '../../styles/ContainerStyles.module.scss'
import styles from './AdminAnalyze.module.scss'
import SearchPanel from '../../UI/SearchPanel/SearchPanel';
import {Button} from "@nextui-org/button";
import cn from 'classnames'
import trashCan from '../../assets/icons/trash.svg';
import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';

const AdminAnalyze = () => {

    const {auth} = useAuth();

    const [inputCategory,setInputCategory] = useState('');

    const [categoriesList,setCategoriesList] = useState([]);
    const [visible,setVisible] = useState(false);

    useEffect(() =>{
        (async () =>{
            const res = await fetch('http://medclinic-422605.uc.r.appspot.com/api/v1/analysis');
            const data = await res.json();
            setCategoriesList(data.reverse());

        })();

    },[categoriesList])

    const isVisible = () => {
        setVisible(!visible)
        setInputCategory('')
    }

    const addAnalyzeCategory = async () => {

        const res = await fetch('https://medclinic-422605.uc.r.appspot.com/api/v1/analysis/add-analysisCategory',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${auth?.accessToken}` 
            },
            body: JSON.stringify({ name: inputCategory})
        });
        console.log(res);

        setVisible(false);
        setInputCategory('');

    }

    const removeAnalyzeCategory = async (id) => {
        const res = await fetch(`https://medclinic-422605.uc.r.appspot.com/api/v1/analysis/delete-category/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${auth?.accessToken}` 
            },
        });
        console.log(res);
    
    }

    
    return (
        <>
            <div className = {container.container}>
                <div className = {styles.header}>
                    <h1 className= {styles.head}>Анализы</h1>

                    <Button color='primary' onClick={isVisible}>
                        {"Добавить категорию анализов"}
                    </Button>
                </div>

                <SearchPanel/>



                <div className= {cn(styles.addCategory,!visible ? styles.hidden:styles.visible)}>
                    <input 
                        type='text'  
                        onChange={(e) => {setInputCategory(e.target.value)}} 
                        onKeyDown={(e) => {if(e.code == 'Enter') addAnalyzeCategory()}}
                        value={inputCategory}
                        />
                </div>


                <ul className= {styles.analyzesList}>

                    {categoriesList.map(({id,name}) =>
                        <Link to = {`/admin/analyzes/${id}`} key={id}>
                            <li className= {styles.item}>
                                <div className= {styles.analyzeTitle}>
                                    <span>{id}</span>
                                    <span className= {styles.title}>{name}</span>
                                </div>
                                <div className= {styles.action} onClick = {() => {removeAnalyzeCategory(id)}}>
                                    <img src = {trashCan}/>
                                </div>
                            </li>
                        </Link>)}

                </ul>


            </div>


        
        </>
    )
}



export default AdminAnalyze;