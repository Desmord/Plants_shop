import { BsCart } from 'react-icons/bs';

import styles from './Header.module.scss'

const Header = () => {

    return (
        <div className={styles.container}>
            <div className={`${styles.menuButton} ${styles.button}`}>Home</div>
            <div className={`${styles.cart} ${styles.button}`}>
                <BsCart />
                <div className={styles.productCounter}>0</div>
            </div>
        </div>
    )
}

export default Header