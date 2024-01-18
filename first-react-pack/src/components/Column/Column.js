import React from 'react';
import styles from './Column.module.scss';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';
import { useSelector } from 'react-redux';


const Column = (props) => {
    const cards = useSelector((state) =>
    state.cards.filter((card) => card.columnId === props.id)
  );
  return (
    <article className={styles.column}>
        <h2 className={styles.h2}><span className={styles.icon + ' fa fa-' + props.icon} />{props.title}</h2>       
        <ul className={styles.cards}>
            <CardForm columnId={props.id} />
        </ul>
    </article>  
);

};
  
export default Column;


