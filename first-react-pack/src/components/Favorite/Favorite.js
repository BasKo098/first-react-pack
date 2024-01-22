import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';

const Favorite =  (props) => {
    return (
        <div className={styles.favorite}>
            <PageTitle>Favorite</PageTitle>  
        </div>
    );
};
export default Favorite;