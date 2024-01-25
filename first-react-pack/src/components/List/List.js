import Column from '../Column/Column';
import styles from './List.module.scss';
import ColumnForm from '../ColumnForm/ColumnForm';
import SearchForm from '../SearchForm/SearchForm';
import { useSelector } from 'react-redux';
import { getColumnsByList } from '../../redux/columnsReducer';
import { getListById } from '../../redux/listRedux';
import { useParams, Navigate } from 'react-router';

const List = () => {
    
    const { listId } = useParams();
    const listData = useSelector(state => getListById(state, listId))
    const columns = useSelector(state => getColumnsByList(state, listId));

    console.log('List Data:', listData);
    //const listData = useSelector(state => getListById(state, props.listId));
    console.log('columns', columns);

    if(!listData) return <Navigate to="/" />
    return (
        <div className={styles.list}>
          <header className={styles.header}>
            <h2 className={styles.title}>{listData.title}</h2>
          </header>
          <p className={styles.description}>{listData.description}</p>
          <SearchForm />
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
