import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setCart } from '../Redux/Cart/cartSlice'

const LocalStorageLoad = () => {

    const dispatch = useDispatch()

    const getLoacalStorage = async () => {
        const rawCart = localStorage.getItem(`kodilla_project_cart`);

        if (rawCart?.length) {
            const cart = await (JSON.parse(rawCart))

            dispatch(setCart(cart))
        }
    }

    useEffect(() => {
        getLoacalStorage()
    }, [])

    return (<></>)
}

export default LocalStorageLoad