import { useLoaderData } from "react-router-dom";


const Landing = () => {
    const apparel = useLoaderData
    console.log(apparel)
    return (<h3>Apparel</h3>)
}

export default Landing;