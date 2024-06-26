


const URL = process.env.REACT_APP_URL;

export const apparelLoader = async () => {
    const response = await fetch(`${URL}/apparel`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
}});
    const apparel = await response.json();
    return apparel;
}

export const clothingLoader = async ({params}) => {
    const response = await fetch(`${URL}/apparel/${params.id}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })
    

    const apparel = await response.json();
    return apparel;
}
export const mensLoader = async () => {
    const response = await fetch(`${URL}/apparel`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
}});
    const apparel = await response.json();
    return apparel;
}
export const womensLoader = async () => {
    const response = await fetch(`${URL}/apparel`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
}});
    const apparel = await response.json();
    return apparel;
}