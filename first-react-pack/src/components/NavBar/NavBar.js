
import styles from './NavBar.module.scss';
import {Link} from 'react-router-dom'

const NavBar = props => {

    return (
        <nav className={styles.navBar}>
            <div className={styles.homeIcon}><Link to = "/" className='fa fa-bars'></Link></div>
            <ul className={styles.navList}>
            <li className={styles.liList}><Link to="/">Home</Link></li>
                <li className={styles.liList}><Link to="/favorite">Favorite</Link></li>
                <li className={styles.liList}><Link to="/about">About</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar