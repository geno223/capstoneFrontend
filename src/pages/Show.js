import { useLoaderData } from "react-router-dom";

const Show = () => {
    const apparel = useLoaderData();
    console.log(apparel);

    
    return(
        <div className="apparel">
           <h1>{apparel.gender}</h1>
           <h2>{apparel.tops}</h2>
           <h2>{apparel.bottoms}</h2>
           <img src={apparel.image} alt="img"/>
           <h2>Price:${apparel.price} USD</h2>
        </div>
    )
}

export default Show;