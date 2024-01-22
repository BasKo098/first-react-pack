import Column from '../Column/Column';
import styles from './List.module.scss';
import ColumnForm from '../ColumnForm/ColumnForm';
import { useSelector } from 'react-redux';
import { getAllColumns, getListById } from '../../redux/store';

const List = (props) => {

    const columns = useSelector(getAllColumns);
    const listData = useSelector(state => getListById(state, 1));
    //const listData = useSelector(state => getListById(state, props.listId));
    if (!listData) {
        return <div>List not found</div>;
    }
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
