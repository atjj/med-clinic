import Rating from '@mui/material/Rating';

import styles from './CommentList.module.scss';
const CommentList = ({items}) => {

    return(
        <div className= {styles.commentsList}>
            {items.map(({name,grade,comment})=> <div key={name}>
                <div className= {styles.patientName}>{name}</div>
                <Rating name="read-only" value = {grade} readOnly />
                <div className= {styles.body}>{comment}</div>
            </div>)}
        </div>
    )

}


export default CommentList;