import styles from './CommentForm.module.scss';
import Rating from '@mui/material/Rating';
import Button from '../../../UI/Button/Button.jsx';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth.jsx';

const CommentForm = ({doctor_id}) => {

    const [rating,setRating] = useState(0);
    const [inputText,setInputText] = useState('');
    const {auth} = useAuth();
    const navigate = useNavigate();
    
    const sendComment = async (e) => {
        e.preventDefault();

        if(auth.email) {
            const res =  await fetch('http://medclinic-420017.uc.r.appspot.com/api/v1/reviews/add-review',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({doctor_id,rating,inputText})
            });

            console.log(res);

        } else { 
            navigate('/signin');
        }

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