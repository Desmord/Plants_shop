import { useEffect, useRef, } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getProducts } from '../../../Utilities/DataBase'
import { setProducts } from '../../../Redux/Products/productsSlice'
import { MAIN_IMAGES } from '../../../Utilities/Images'

import Product from '../../Common/Product/Product';

import styles from './Main.module.scss'

const Main = () => {

    const dispatch = useDispatch();
    const products = useSelector((state: any) => state.products.products);

    const productsRef = useRef<HTMLDivElement>(null)

    const getData = async () => {
        const data = await getProducts();
        dispatch(setProducts(data))
    }

    const scrollToProducts = () =>
        productsRef.current ? productsRef.current.scrollIntoView({ behavior: 'smooth' }) : ``;

    useEffect(() => {
        const isStoreEmpty = products.length ? false : true;

        if (isStoreEmpty) getData();

    }, [products])

    return (
        <div className={styles.container}>
            <div className={styles.splash}>
                <img src={MAIN_IMAGES.IMG_2} alt="plant"></img>
                <img src={MAIN_IMAGES.IMG_3} alt="plant"></img>
                <img src={MAIN_IMAGES.IMG_1} alt="plant"></img>
                <div className={styles.startSection}>
                    <div className={styles.title}>Best plants shop in the word!</div>
                    <div
                        className={styles.subTitle}
                        onClick={() => scrollToProducts()}>
                        Explore Now
                    </div>
                </div>
            </div>
            <Product productRef={productsRef} />
        </div >
    )
}

export default Main