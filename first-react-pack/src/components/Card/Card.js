import styles from './Card.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getCardById } from '../../redux/cardsReducer'; 
import { removeCard } from '../../redux/cardsReducer';
import { toggleCardFavorite } from '../../redux/cardsReducer';
import { clsx } from 'clsx';


const Card = (props) => {

    const card = useSelector(state => getCardById(state, props.id))
    const dispatch = useDispatch()
  
    const toggle = () => {
        dispatch(toggleCardFavorite(props.id))
    };

    const remove = () => {
        dispatch(removeCard(props.id))
    };

    return (
        <li className={styles.card}>{props.title}
            <div>
                <button onClick={toggle} className={styles.star}>
                    <i className={clsx(card.isFavorite && styles.favorite, "fa fa-star-o" )}></i>
                </button>
                <button className={styles.star} onClick={remove}>
                    <i className={"fa fa-trash"}></i>
                </button>
            </div>
        </li>
    );
    
};

export default Card;