import { Link } from 'react-router-dom';
import { BsCart } from 'react-icons/bs';

import styles from './Header.module.scss'

const Header = () => {

    return (
        <div className={styles.container}>
            <Link className={`${styles.menuButton} ${styles.button}`} to="/">Home</Link>
            <div className={`${styles.cart} ${styles.button}`}>
                <Link to="/Cart"><BsCart /></Link>
                <div className={styles.productCounter}>0</div>
            </div>
        </div >
    )
}

export default Header