


const URL = process.env.REACT_APP_URL;

export const apparelLoader = async () => {
    const response = await fetch(`${URL}/apparel`);
    const apparel = await response.json();
    return apparel;
}