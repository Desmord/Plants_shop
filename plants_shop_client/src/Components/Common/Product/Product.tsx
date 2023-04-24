import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { BsSearch } from 'react-icons/bs';
import { ProductType } from '../../../Redux/Products/productsSlice';
import { IMAGES_FOLDER_URL } from '../../../Utilities/Images';

import styles from './Product.module.scss'

const Product = (({ productRef }: { productRef: React.RefObject<HTMLDivElement> }) => {

    const products = useSelector((state: any) => state.products.products);

    const addToCart = (plantId: string) => {
        console.log(`Dodajemy do koszyka`)
    }

    return (
        <div className={styles.container} ref={productRef}>
            {products.map((plant: ProductType) => {
                return (
                    < div className={styles.product} key={plant.id} >
                        <img src={`${IMAGES_FOLDER_URL}${plant.title}/${plant.images ? `${plant.images[0].img}.png` : ``}`} alt="plant"></img>
                        <div className={styles.plantPrice} >{plant.price}</div>
                        <div className={styles.plantName} > {plant.title}</div>
                        <div onClick={() => addToCart(plant.id)} className={styles.addToCartButton}>Add to Cart</div>
                        <Link className={styles.showDetails} to={`/Product/${plant.id}`}><BsSearch /></Link>
                    </div>
                )
            })
            }
        </div >
    )
})

export default Product