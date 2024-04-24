import { Link ,useLoaderData } from "react-router-dom";

const Show = () => {
    const apparel = useLoaderData();
    console.log(apparel);

    
    return(
        <div className="apparel">
           <h1>{apparel.gender}</h1>
           <h1>{apparel.tops}</h1>
           <h1>{apparel.bottoms}</h1>
           <img src={apparel.image} alt="img"/>
           <h3>Price:${apparel.price} USD</h3>
           
           <Link to="/">
                <button>Go Back</button>
            </Link>
        </div>
    
    )
}

export default Show;