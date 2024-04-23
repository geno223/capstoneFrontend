


const URL = process.env.REACT_APP_URL;

export const apparelLoader = async () => {
    const response = await fetch(`${URL}/apparel`);
    const apparel = await response.json();
    return apparel;
}

export const clothingLoader = async ({params}) => {
    const response = await fetch(`${URL}/apparel/${params.id}`);
    const apparel = await response.json();
    return apparel;
}