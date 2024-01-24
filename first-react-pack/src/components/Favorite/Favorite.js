import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import { useSelector } from 'react-redux';
import { getFavoriteCard } from '../../redux/cardsReducer';
import Card from '../Card/Card';


const Favorite =  () => {

    const cards = useSelector(state => getFavoriteCard(state, true));


    if (!cards.length)
    return (
        <div className={styles.noFavoriteCards}>
        <PageTitle>You don't have favourite cards yet.</PageTitle>
        </div>
    );

    return (
        <div className={styles.favorite}>
            <PageTitle>Favorite</PageTitle>  
            <p>This is favorite.</p> 
            <ul className= {styles.cards}>
                {cards.map((card)=> (<Card key={card.id} title={card.title} isFavorite={card.isFavorite} id={card.id} />
                ))}
            </ul>
        </div>
    );
};
export default Favorite;