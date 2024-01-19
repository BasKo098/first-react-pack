import React from 'react';
import styles from './Column.module.scss';
import CardForm from '../CardForm/CardForm';
import Card from '../Card/Card';
import { useSelector } from 'react-redux';

const Column = (props) => {
    console.log("Cards:", useSelector(state => state.cards));
  console.log("Search String:", useSelector(state => state.searchString));
  //const cards = useSelector((state) => state.cards);
    const searchString = useSelector(state => state.searchString);
    const cards = useSelector((state) =>
    state.cards.filter(
      (card) =>
        card.columnId === props.id && card.title.toLowerCase().includes(searchString.toLowerCase())
    )
  )

  return (
    <article className={styles.column}>
        <h2 className={styles.h2}><span className={styles.icon + ' fa fa-' + props.icon} />{props.title}</h2>       
        <ul className={styles.cards}>
            {cards.map(card => <Card key={card.id} title={card.title} />)}
        </ul>
        <CardForm columnId={props.id} />
    </article>  
   );
};
  
export default Column;


