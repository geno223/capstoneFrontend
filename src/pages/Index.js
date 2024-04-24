import { Link, useLoaderData } from "react-router-dom";




const Landing = () => {
    const apparel = useLoaderData();
    console.log(apparel)
    

    if(apparel.isLoading){
        return <div>Loading...</div>
    }
    

    return (
        <div>
            
            {apparel.map(apparel => {
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
        </div>

    )
}

export default Landing;