import styles from './SearchPanel.module.scss';
const SearchPanel = () => {
    return (
        <div className= {styles.search}>
             <input className= {styles.searchPanel} type="search" placeholder="Поиск"/>
        </div>
    )
}


export default SearchPanel;