import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getProducts } from '../../../Utilities/DataBase'
import { setProducts } from '../../../Redux/Products/productsSlice'

import styles from './Main.module.scss'

const Main = () => {

    const dispatch = useDispatch();
    const products = useSelector((state: any) => state.products.products);

    const getData = async () => {
        const data = await getProducts();
        dispatch(setProducts(data))
    }

    useEffect(() => {
        const isStoreEmpty = products.length ? false : true;

        if (isStoreEmpty) getData();

    }, [products])

    return (
        <div className={styles.container}></div>
    )
}

export default Main