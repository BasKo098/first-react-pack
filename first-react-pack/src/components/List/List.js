import Column from '../Column/Column';
import styles from './List.module.scss';
import ColumnForm from '../ColumnForm/ColumnForm';
import { useSelector } from 'react-redux';
import { getAllColumns, getListById, getColumnsByList } from '../../redux/store';

const List = (props) => {
    

    const columns = useSelector(state => getColumnsByList(state, props.listId));
    console.log('Columns:', columns);
    const listData = useSelector(state => getListById(state, 1));
    console.log('List Data:', listData);
    //const listData = useSelector(state => getListById(state, props.listId));


    return (
        <div className={styles.list}>
          <header className={styles.header}>
            <h2 className={styles.title}>{listData.title}</h2>
          </header>
          <p className={styles.description}>{listData.description}</p>
          <section className={styles.columns}>
            {columns.map(column =>
              <Column
                key={column.id}
                {...column}  />
            )}
          </section>
          <ColumnForm />
        </div>
      );
};

export default List;
