import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';

const Favorite =  (props) => {
    return (
        <div className={styles.favorite}>
            <PageTitle>Favorite</PageTitle>  
            <p>This is favorite.</p> 
        </div>
    );
};
export default Favorite;