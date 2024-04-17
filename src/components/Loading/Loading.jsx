import loading from '../../assets/icons/loading2.svg';

import styles from './Loading.module.scss';

const Loading = () =>{
    return (
        <div className= {styles.wrapper}>
            <img src = {loading}/>
        </div>
    )
}

export default Loading;