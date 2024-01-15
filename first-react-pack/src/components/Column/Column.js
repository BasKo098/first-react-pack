import React from 'react';
import styles from './Column.module.scss';
import Card from '../Card/Card';

const Column = (props) => {
    return (
        <article className={styles.column}>
            <h2 className={styles.h2}><span className={styles.icon + ' fa fa-' + props.icon} />{props.title}</h2>       
            <ul className={styles.cards}>
                {props.cards.map(card => <Card key={card.id} title={card.title} />)}
            </ul>
        </article>  
    );
};
  
export default Column;


