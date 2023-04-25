import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BsCart } from 'react-icons/bs';

import styles from './Header.module.scss'

const Header = () => {
    const products = useSelector((state: any) => state.cart.products);

    return (
        <div className={styles.container}>
            <Link className={`${styles.menuButton} ${styles.button}`} to="/">Home</Link>
            <div className={`${styles.cart} ${styles.button}`}>
                <Link to="/Cart"><BsCart /></Link>
                {products.length ? <div className={styles.productCounter}>{products.length}</div> : ``}
            </div>
        </div >
    )
}

export default Header