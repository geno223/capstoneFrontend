import { Link ,useLoaderData } from "react-router-dom";

const Mens = () => {
    const apparel = useLoaderData();
    const mens= apparel.filter((clothes)=> clothes.gender === 'Mens')

    
    return(
        <div>

        {mens.map((apparel) => {
            return(
                <div key={apparel._id} className="apparel">
                    <Link to={`/${apparel._id}`}>
                    <h1>{apparel.gender}: {apparel.tops} {apparel.bottoms}</h1>
                    
                    
                    </Link>
                    <img src={apparel.image} alt="img"/>
                    
                    
                    
                    <h3>Price:${apparel.price}</h3> 
                    
                </div>
            )
        })}
        <Link to="/">
                <button>Go Back</button>
            </Link>
        </div>

    )
}

export default Mens;