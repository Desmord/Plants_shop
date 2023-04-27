import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { BsSearch } from 'react-icons/bs';
import { ProductType } from '../../../../Redux/Products/productsSlice';
import { setProductQuantity } from '../../../../Redux/Cart/cartSlice';
import { IMAGES_FOLDER_URL } from '../../../../Utilities/Images';

import styles from './SingleProduct.module.scss'

const Product = (({ productRef }: { productRef: React.RefObject<HTMLDivElement> }) => {

    const dispatch = useDispatch();
    const products = useSelector((state: any) => state.products.products);

    const addToCart = (plantId: string) => {
        const productToAdd = products.filter((product: ProductType) => product.id === plantId ? true : false)

        if (productToAdd.length) dispatch(setProductQuantity({ givenProduct: productToAdd[0], newQuantity: 1 }))

    }

    return (
        <div className={styles.container} ref={productRef}>
            {products.map((plant: ProductType) => {
                return (
                    < div className={styles.product} key={plant.id} >
                        <img src={`${IMAGES_FOLDER_URL}${plant.title}/${plant.images ? `${plant.images[0].img}.png` : ``}`} alt="plant"></img>
                        <div className={styles.plantPrice} >{plant.price}</div>
                        <div className={styles.plantName} > {plant.title}</div>
                        <div
                            onTouchStart={() => addToCart(plant.id)}
                            onClick={() => addToCart(plant.id)}
                            className={styles.addToCartButton}>Add to Cart</div>
                        <Link className={styles.showDetails} to={`/Product/${plant.id}`}><BsSearch /></Link>
                    </div>
                )
            })
            }
        </div >
    )
})

export default Product