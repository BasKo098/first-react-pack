import { useState } from 'react';
import styles from './CardForm.module.scss';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';

const CardForm = props => {

    const [title, setTitle] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        if (typeof props.action === 'function') {
            props.action({ title: title }, props.columnId);
            setTitle('');
        } else {
            console.error("props.action is not a function");
        }
    };

    return (
        <form className= {styles.cardForm} onSubmit={handleSubmit}>
            <TextInput value={title} onChange={e => setTitle(e.target.value)} />
            <Button>ADD CARD</Button>
        </form>
    );
};
export default CardForm;