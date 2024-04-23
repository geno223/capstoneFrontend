import { Link } from "react-router-dom";

const Header = () => {
    return(
        <nav className="nav">
            <Link to='/'>
                <div>Apparel App</div>
            </Link>
        </nav>
    )
}

export default Header;