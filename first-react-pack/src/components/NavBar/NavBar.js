
import styles from './NavBar.module.scss';

const NavBar = props => {

    return (
        <nav className={styles.navBar}>
            <div className={styles.homeIcon}><a href = "" className='fa fa-bars'></a></div>
            <ul className={styles.navList}>
                <li className={styles.liList}><a href = "">Home</a></li>
                <li className={styles.liList}><a href = "">Favorite</a></li>
                <li className={styles.liList}><a href = "">About</a></li>
            </ul>
        </nav>
    );
};

export default NavBar