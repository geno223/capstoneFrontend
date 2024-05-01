import { Link } from "react-router-dom";
import Main from "./Main";
const Header = () => {
    
    return(
        <nav className="nav">
            <Link to='/'>
                <div>Apparel</div>
            </Link>
            <Link to='/mens'>
                <div>Mens</div>
            </Link>
            <Link to='/womens'>
                <div>Womens</div>
            </Link>
            <Main/>
        </nav>
    )
    
}

export default Header;