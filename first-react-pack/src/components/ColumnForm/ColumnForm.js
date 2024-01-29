import styles from './ColumnForm.module.scss';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addColumn } from '../../redux/columnsReducer';



const ColumnForm = ({listId}) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');
    
    
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addColumn({ title, icon, listId}));
        setTitle('');
        setIcon('');
     };
   
console.log('listId:', listId);

	return (
        <form className= {styles.columnForm} onSubmit= {handleSubmit}>
            <span className={styles.input}> Title: </span>
            <TextInput type="text" value= { title } onChange={e => setTitle(e.target.value)} />
            <span className={styles.input}> Icon: </span>
            <TextInput value= { icon } onChange={e => setIcon(e.target.value)} />
            <Button> ADD COLUMN </Button>
        </form>
	);
    
};

export default ColumnForm;