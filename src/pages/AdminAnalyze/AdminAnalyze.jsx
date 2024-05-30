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

    const loadCategories = async () => {
        const res = await fetch('http://medclinic-422605.uc.r.appspot.com/api/v1/analysis');
        const data = await res.json();
        setCategoriesList(data.reverse());
    };

    useEffect(() => {
        
        loadCategories();


    },[visible])

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
        if (res.ok) {
            loadCategories();
            setVisible(false);
            setInputCategory('');
        } else {
            console.log("Error adding category");
        }

    }

    const removeAnalyzeCategory = async (id) => {
        const res = await fetch(`https://medclinic-422605.uc.r.appspot.com/api/v1/analysis/delete-category/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${auth?.accessToken}` 
            },
        });
        if (res.ok) {
            loadCategories();
        } else {
            console.log("Error deleting category");
        }
    
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

                    {categoriesList.map(({id,name},index) =>
                        <li key = {id} className = {styles.item}>
                            <Link to = {`/admin/analyzes/${name}/${id}`}>
                                <div className = {styles.analyzeTitle}>
                                    <span>{index+1}</span>
                                    <span className = {styles.title}>{name}</span>
                                </div>
                            </Link>
                            <div className= {styles.action} onClick = {() => {removeAnalyzeCategory(id)}}>
                                <img src = {trashCan}/>
                            </div>
                        </li>


                    )}

                </ul>


            </div>


        
        </>
    )
}



export default AdminAnalyze;