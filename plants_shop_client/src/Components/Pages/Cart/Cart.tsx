import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Product from './Product/Product';

import styles from './Cart.module.scss'

const Cart = () => {

    const products = useSelector((state: any) => state.cart.products);

    return (
        <div className={styles.container}>
            <div className={styles.header}></div>
            {products.length ?
                <div className={styles.productList}>
                    {products.map((product: any, index: number) =>
                        (<Product product={product} key={index} />))}
                    <div className={styles.order}>
                        <Link to="/Order">Summary</Link>
                    </div>
                </div> :
                <div className={styles.emptyCart}>Empty Cart</div>}
        </div>
    )
}

export default Cart