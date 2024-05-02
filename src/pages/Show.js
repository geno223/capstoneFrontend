import { Link ,useLoaderData, Form } from "react-router-dom";

const Show = () => {
    const apparel = useLoaderData();
    console.log(apparel);

    
    return(
        <div className="apparel">

        <h2>Update {apparel.name}</h2>
            <Form action={`/update/${apparel._id}`} method='post'>
                <input type='input' name='gender' placeholder="gender" defaultValue={apparel.gender}/>
                <input type='input' name='image' placeholder="picture" defaultValue={apparel.image}/>
                <input type='input' name='tops' placeholder="" defaultValue={apparel.tops}/>
                <input type='input' name='bottoms' placeholder="" defaultValue={apparel.bototms}/>
                <input type='input' name='price' placeholder="price" defaultValue={apparel.price}/>
                <input type='submit' value={`Update ${apparel._id}`}/>
            </Form>


            <h2>Delete</h2>
            <Form action={`/delete/${apparel._id}`} method='post'>
                <input type='submit' value={`Delete ${apparel._id}`}/>
            </Form>

        
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