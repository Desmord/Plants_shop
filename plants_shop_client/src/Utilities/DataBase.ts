export const PRODUCTS_URL = `http://localhost:8000/api/products`;
export const OREDERS_URL = `http://localhost:8000/api/orders/`;


export const getProducts = async () => {
    const response = await fetch(PRODUCTS_URL);
    const jsonData = await response.json();

    return jsonData;
}