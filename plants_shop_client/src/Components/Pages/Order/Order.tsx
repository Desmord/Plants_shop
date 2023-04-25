import { useSelector } from 'react-redux';
import { useState } from 'react';
import { OREDERS_URL, PRODUCTS_URL } from '../../../Utilities/DataBase';

import styles from './Order.module.scss'

const Order = () => {

    const products = useSelector((state: any) => state.cart.products);

    const [firstName, setFirstName] = useState(``);
    const [lastName, setLastName] = useState(``);
    const [adress, setAdress] = useState(``);
    const [clientNotes, setClientNotes] = useState(``);

    const getTotalPrice = () => {
        const totalPrice = products.reduce((total: number, product: any) => {
            return total + product.quantity * parseInt(product.product.price)
        }, 0)

        return totalPrice
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const response = await fetch(OREDERS_URL, {
            method: `POST`,
            mode: `cors`,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                adress: adress,
                clientNotes: clientNotes
            })
        })

        const jsonData = await response.json();

        if (jsonData.error) return 0

        const orderId = jsonData.id;
        let isSuccess = true;

        for (let i = 0; i < products.length; i++) {

            const response = await fetch(`${PRODUCTS_URL}/${products[i].product.id}`, {
                method: `PUT`,
                mode: `cors`,
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title: products[i].product.title,
                    price: products[i].product.price,
                    description: products[i].product.description,
                    orderId: orderId,
                    quantity: `${products[i].quantity}`
                })
            })
            const jsonData = await response.json();

            if (jsonData.error) { isSuccess = false };

        }

        if (isSuccess) {
            // tostyfi i czycszcznie formu lub przejscie na strone głowna
        } else {
            // tostyfi
        }

    }

    return (
        <div className={styles.container}>
            <div className={styles.header}></div>
            {products.length ?
                <div className={styles.orderContainer}>
                    <div className={styles.productList}>
                        {products.map((product: any, index: number) => (
                            <div className={styles.product} key={index}>
                                <span>{product.product.title}  </span>
                                <span> {product.quantity} x ${product.product.price} </span>
                                <span> ${product.quantity * product.product.price}</span>
                            </div>
                        ))}
                    </div>
                    <div className={styles.orderForm}>
                        <div className={styles.totalPrice}>Total: ${getTotalPrice()}</div>
                        <form
                            onSubmit={(e) => handleSubmit(e)}
                            className={styles.orderForm}>
                            <input
                                className={styles.myInput}
                                placeholder='First Name'
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                maxLength={40}></input>
                            <input
                                className={styles.myInput}
                                placeholder='Last Name'
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                maxLength={40}></input>
                            <input
                                className={styles.myInput}
                                placeholder='Adress'
                                value={adress}
                                onChange={(e) => setAdress(e.target.value)}
                                maxLength={200}></input>
                            <textarea
                                className={styles.myInput}
                                placeholder='Additional information'
                                value={clientNotes}
                                onChange={(e) => setClientNotes(e.target.value)}
                                maxLength={200}></textarea>
                            <button className={styles.orderButton}>Order</button>
                        </form>

                    </div>
                </div>
                : <div className={styles.emptyCart}>Empty Cart</div>}



        </div >
    )
}

export default Order