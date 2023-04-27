import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
    removeProductFromCart,
    setProductQuantity,
    setProductNote,
} from '../../../../Redux/Cart/cartSlice';
import { BsTrash3 } from 'react-icons/bs';

import styles from './Product.module.scss'

const Product = ({ product }: { product: any }) => {

    const dispatch = useDispatch();
    const [productCount, setProductCount] = useState(`0`);
    const [clientNote, setClientNote] = useState(``);

    const handleRemove = () => {
        dispatch(removeProductFromCart({ productId: product.product.id }))
    }

    const handleAddToCart = () => {

        if (productCount !== `0`) {
            dispatch(setProductQuantity({ givenProduct: product.product, newQuantity: parseInt(productCount) }))
        } else {
            dispatch(removeProductFromCart({ productId: product.product.id }))
        }

    }

    const handleAddNote = () => {
        dispatch(setProductNote({ givenProduct: product.product, newNote: clientNote }))
    }

    useEffect(() => {
        setProductCount(product.quantity)
        if (product.notes) setClientNote(product.notes)
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.title}>{product.product.title}</div>
            <div className={styles.price}>${product.product.price}</div>
            <div className={styles.totalPrice}>Total price: ${product.quantity * product.product.price}</div>
            <div
                onTouchStart={() => handleRemove()}
                onClick={() => handleRemove()}
                className={styles.removeProduct}><BsTrash3 /></div>
            <div className={styles.menu}>
                <input
                    className={styles.myInput}
                    value={productCount}
                    onChange={(e) => setProductCount(e.target.value)}
                    type="number"
                    min="0"
                    max="100"
                    maxLength={3}></input>
                <div
                    onTouchStart={() => handleAddToCart()}
                    onClick={() => handleAddToCart()}
                    className={styles.change}>Change Quantity</div>
            </div>
            <textarea
                value={clientNote}
                onChange={(e) => setClientNote(e.target.value)}
                maxLength={199}
                className={styles.notes}></textarea>
            <div
                onTouchStart={() => handleAddNote()}
                onClick={() => handleAddNote()}
                className={styles.addNotes}>Add note</div>

        </div >
    )
}

export default Product