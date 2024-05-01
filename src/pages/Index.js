import { Link, useLoaderData } from "react-router-dom";




const Landing = () => {
    const apparel = useLoaderData();
    console.log(apparel)
    

    if(apparel.isLoading){
        return <div>Loading...</div>
    }
    

    return (
        <div className="container">
            
            {apparel.map((apparel) => {
                return(
                    <div key={apparel._id} className="apparel">
                        <Link to={`/${apparel._id}`}>
                        <h1>{apparel.gender}: {apparel.tops} {apparel.bottoms}</h1> 
                        <h1>Price:${apparel.price}</h1>
                        
                        
                        </Link>
                        <img src={apparel.image} alt="img"/>
                        
                        
                        
                        
                        
                    </div>
                )
            })}
        </div>

    )
}

export default Landing;