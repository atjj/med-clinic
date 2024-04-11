import Rating from '@mui/material/Rating';

import styles from './CommentList.module.scss';
const CommentList = ({items}) => {

    return(
        <div className= {styles.commentsList}>
            {items.map(({rating,text})=> <div key={rating}>
                <Rating name="read-only" value = {rating} readOnly />
                <div className= {styles.body}>{text}</div>
            </div>)}
        </div>
    )

}


export default CommentList;