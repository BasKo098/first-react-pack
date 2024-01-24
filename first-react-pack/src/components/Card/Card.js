import styles from './Card.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getCardById, toggleCardFavorite} from '../../redux/store';
import {clsx} from 'clsx';

const Card = (props) => {

    const card = useSelector(state => getCardById(state, props.id))
    const dispatch = useDispatch()

    const toggle = () => {
    dispatch(toggleCardFavorite(props.id))
    }


    return (
        <li className={styles.card}>{props.title}
            <div>
                <button onClick={toggle} className={styles.star}>
                    <i className={clsx(card.isFavorite && styles.favorite, 'fa-star-o')}></i>
                </button>
            </div>
        </li>
    );
};

export default Card;