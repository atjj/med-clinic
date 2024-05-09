import styles from './CommentForm.module.scss';
import Rating from '@mui/material/Rating';
import Button from '../../../UI/Button/Button.jsx';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth.jsx';

const CommentForm = ({doctor_id}) => {

    const [grade,setGrade] = useState(0);
    const [comment,setComment] = useState('');
    const {auth} = useAuth();
    const navigate = useNavigate();

    const isDisabled = (grade == 0) || (comment == '') ? true : false;

    
    const sendComment = async (e) => {
        e.preventDefault();

        if(auth.accessToken) {
            const res =  await fetch('https://medclinic-422605.uc.r.appspot.com/api/v1/reviews/add-review',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${auth?.accessToken}` 
                },
                body: JSON.stringify({doctor_id,grade,comment})
            });

            console.log(res);

            setComment('');
            setGrade(0);
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
                value={grade}
                onChange={(event, newValue) => {
                    setGrade(newValue);
                }}
                />
            <div className = {styles.commentField}>
                <textarea 
                    placeholder='Ваш отзыв'
                    value = {comment}
                    onChange = {(e) => { setComment(e.target.value)}}></textarea>
            </div>
            <div className= {styles.btn}>
                <Button text = {"ОТПРАВИТЬ ОТЗЫВ"} radius={'medium'} disabled={isDisabled}/>
            </div>
        
        </form>
    )
}



export default CommentForm;