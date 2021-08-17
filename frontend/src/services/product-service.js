const BASE_URL = process.env.REACT_APP_URL;

export const getProducts = async (search = undefined, page = undefined) => {
    let url = `${BASE_URL}/products`;
    if (search) {
        url = `${url}?searchParam=${search}`
    }
    if (page) {
        url = `${url}&page=${page}`
    }
    const resp = await fetch(url);
    if (resp.ok) {
        return resp.json();
    }
    throw resp.text();
}