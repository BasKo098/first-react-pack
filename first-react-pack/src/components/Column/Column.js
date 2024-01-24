import React from 'react';
import styles from './Column.module.scss';
import CardForm from '../CardForm/CardForm';
import Card from '../Card/Card';
import { useSelector } from 'react-redux';
import { getFilteredCards } from '../../redux/cardsReducer';

const Column = (props) => {
  //const cards = useSelector((state) => state.cards);
   
    const cards = useSelector(state => getFilteredCards(state, props.id));

  return (
    <article className={styles.column}>
        <h2 className={styles.h2}><span className={styles.icon + ' fa fa-' + props.icon} />{props.title}</h2>       
        <ul className={styles.cards}>
            {cards.map(card => <Card key={card.id} title={card.title} />)}
        </ul>
        <CardForm columnId={props.id} />
    </article>  
   );
   console.log(cards);
};
  
export default Column;


