
//welcome
//signup form
//login form
import { Link, Outlet, useNavigate } from 'react-router-dom';


const Main = () => {
    const navigate = useNavigate()    
    return (
        <div>
            <button onClick={() => {
        //remove the token
        localStorage.removeItem('token');

        //go back to the / route
        navigate('/');
      }}>
        Logout
      </button>
         
            <h1>Welcome to the apparel application</h1>
            <h3>Do you want to sign up?</h3>
            <Link to='/signup'><button>Sign Up</button> </Link>

            <h3>Do you want to login?</h3>
            <Link to='/login'><button>Login</button> </Link>
            <Outlet/>


        </div>
    )
}

export default Main;