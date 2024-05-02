import { Link, useLoaderData,Form } from "react-router-dom";




const Landing = () => {
    const apparel = useLoaderData();
    console.log(apparel)
    

    if(apparel.isLoading){
        return <div>Loading...</div>
    }
    

    return (
        <div>
            
            <h3>Add</h3>
            
            <Form action='/create' method='post'>
            <input type='input' name='gender' placeholder="gender" defaultValue={apparel.gender}/>
                <input type='input' name='image' placeholder="picture" defaultValue={apparel.image}/>
                <input type='input' name='tops' placeholder="" defaultValue={apparel.tops}/>
                <input type='input' name='bottoms' placeholder="" defaultValue={apparel.bototms}/>
                <input type='input' name='price' placeholder="price" defaultValue={apparel.price}/>
                <input type='submit' value={'Add'} />
            </Form>
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