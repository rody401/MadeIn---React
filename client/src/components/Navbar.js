import './Navbar.css';
import {Link} from 'react-router-dom';

const Navbar = ( {click} ) => {
    return (
        <nav className="navbar">
            <div className="navbar_logo">
                <h2>MadeIn</h2>
            </div>

            <ul className="navbar_links">
                <li>
                    <Link to="/addproduct" className="add_link">
                        <i className="fas fa-plus"></i>
                        Add
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        Home
                    </Link>
                </li>

            </ul>

            {/* ham menu */}
            <div className="ham_menu" onClick={click}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            
        </nav>
    )
}

export default Navbar;
