import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { IMAGES_FOLDER_URL } from '../../../Utilities/Images';
import { ProductType } from '../../../Redux/Products/productsSlice';
import { setProductQuantity, removeProductFromCart } from '../../../Redux/Cart/cartSlice';

import styles from './Product.module.scss'

const Product = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    const dispatch = useDispatch();
    const cartProducts = useSelector((state: any) => state.cart.products);
    const product = useSelector((state: any) =>
        state.products.products.filter((product: ProductType) => product.id === id ? true : false));


    const [mainImageUrl, setMainImageUrl] = useState(``);
    const [productCount, setProductCount] = useState(`0`);
    const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null);

    const getTotalPrice = () => product.length ? parseInt(productCount) * product[0].price : ``

    const handleAddToCart = () => {

        if (productCount !== `0`) {
            dispatch(setProductQuantity({ givenProduct: selectedProduct, newQuantity: parseInt(productCount) }))
        } else {
            dispatch(removeProductFromCart({ productId: id ? id : `` }))
        }

    }

    useEffect(() => {
        const isPorductSelectedExist = product.length && product[0]?.id ? true : false;
        if (!isPorductSelectedExist) navigate(`/`)

    }, [product])

    useEffect(() => {
        const searchProduct = product.length && product[0]?.id ? product[0] : false;

        if (searchProduct) {
            setMainImageUrl(`../${IMAGES_FOLDER_URL}${product[0].title}/${product[0].images[0].img}.png`)
            setSelectedProduct(searchProduct)

            const isProductInCart = cartProducts.find((product: any) => product.product.id === id ? true : false)

            if (isProductInCart)
                setProductCount(isProductInCart.quantity)
        }

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
                <div
                    onClick={() => handleAddToCart()}
                    className={styles.addToCart}>Add to cart</div>
            </div>
        </div>
    )
}

export default Product