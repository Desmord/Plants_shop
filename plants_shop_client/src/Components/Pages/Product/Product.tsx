import { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { IMAGES_FOLDER_URL } from '../../../Utilities/Images';

import styles from './Product.module.scss'
import { ProductType } from '../../../Redux/Products/productsSlice';

const Product = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    const product = useSelector((state: any) =>
        state.products.products.filter((product: ProductType) => product.id === id ? true : false));

    const [mainImageUrl, setMainImageUrl] = useState(``);
    const [productCount, setProductCount] = useState(`0`);

    const getTotalPrice = () => product.length ? parseInt(productCount) * product[0].price : ``

    useEffect(() => {
        const isPorductSelectedExist = product.length && product[0]?.id ? true : false;
        if (!isPorductSelectedExist) navigate(`/`)

    }, [product])

    useEffect(() => {
        const isPorductSelectedExist = product.length && product[0]?.id ? true : false;

        if (isPorductSelectedExist)
            setMainImageUrl(`../${IMAGES_FOLDER_URL}${product[0].title}/${product[0].images[0].img}.png`)

    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.header}></div>
            <div className={styles.imagesContainer}>
                <div className={styles.mainImage}>
                    <img src={mainImageUrl} alt="main"></img>
                </div>
                <div className={styles.smallImagesContainer}>
                    {product.length ? product[0].images.length < 2 ? `` :
                        product[0].images.map((image: { img: string }, index: number) =>
                            <img
                                onClick={() => setMainImageUrl(`../img/${product[0].title}/${image.img}.png`)}
                                key={index}
                                src={`../${IMAGES_FOLDER_URL}${product[0].title}/${image.img}.png`} alt="small">
                            </img>
                        ) : ``}
                </div>
            </div>
            <div className={styles.productDetailsContinaier}>
                <div className={styles.title}>{product.length ? product[0].title : ``}</div>
                <div className={styles.description}>{product.length ? product[0].description : ``}</div>
                <div className={styles.orderForm}>
                    <div className={styles.price}>${product.length ? product[0].price : ``}</div>
                    <input
                        className={styles.myInput}
                        value={productCount}
                        onChange={(e) => setProductCount(e.target.value)}
                        type="number"
                        min="0"
                        max="100"
                        maxLength={3}></input>
                    <div className={styles.total}>Total: {getTotalPrice()}</div>
                </div>
            </div>
        </div>
    )
}

export default Product