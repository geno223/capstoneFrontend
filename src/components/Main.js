
//welcome
//signup form
//login form
import { Link, useNavigate } from 'react-router-dom';


const Main = () => {
    const navigate = useNavigate()    
    return (
        <div>
          <h1>Apparel</h1>
            <h3>
            <Link to='/signup'><button>Sign Up</button> </Link>
             <Link to='/login'><button>Sign In</button> </Link>
            
        </h3>
            <button onClick={() => {
        //remove the token
        localStorage.removeItem('token');
      //go back to the / route
        navigate('/login');
      }}>
        Logout
      </button>

      
</div>
    )
}

export default Main;