import { useSelector } from 'react-redux';
import { useEffect } from 'react'

import styles from './Cart.module.scss'

const Cart = () => {

    const products = useSelector((state: any) => state.cart.products);

    useEffect(()=>{
        console.log(`Koszyk: `,products)
    },[])

    return (
        <div className={styles.container}>Cart</div>
    )
}

export default Cart