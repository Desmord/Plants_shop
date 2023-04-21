const GET_PRODUCTS_URL = `http://localhost:8000/api/products`;


export const getProducts = async () => {
    const response = await fetch(GET_PRODUCTS_URL);
    const jsonData = await response.json();

    return jsonData;
}