import styles from './CommentForm.module.scss';
import Rating from '@mui/material/Rating';
import Button from '../../../UI/Button/Button.jsx';
import { useState } from 'react';
const CommentForm = () => {

    const [rating,setRating] = useState(0);
    const [inputText,setInputText] = useState('');

    
    const sendComment = async (e) => {
        e.preventDefault();
        const res =  await fetch('comment',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({rating,inputText})
        });

        console.log(res);
    } 



    return (

        <form onSubmit = {sendComment} className= {styles.form}>


            <h3>Оставьте свой отзыв</h3>

            <Rating
                style={{marginLeft: "10px",marginTop: "15px"}}
                name="simple-controlled"
                value={rating}
                onChange={(event, newValue) => {
                    setRating(newValue);
                }}
                />
            <div className = {styles.commentField}>
                <textarea 
                    placeholder='Ваш отзыв'
                    onChange = {(e) => { setInputText(e.target.value)}}></textarea>
            </div>
            <div className= {styles.btn}>
                <Button text = {"ОТПРАВИТЬ ОТЗЫВ"} radius={'medium'}/>
            </div>
        
        </form>
    )
}



export default CommentForm;