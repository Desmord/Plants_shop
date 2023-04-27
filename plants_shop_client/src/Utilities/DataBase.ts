export const PRODUCTS_URL = `/api/products`;
export const OREDERS_URL = `/api/orders/`;


export const getProducts = async () => {
    const response = await fetch(PRODUCTS_URL);
    const jsonData = await response.json();

    console.log(response)
    console.log(jsonData)

    return jsonData;
}