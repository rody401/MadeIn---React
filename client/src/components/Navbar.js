import './Navbar.css';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav classname="navbar">
            <div classname="navbar_logo">
                <h2>MadeIn</h2>
            </div>

            <ul classname="navbar_links">
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
            <div className="ham_menu">
                <div></div>
                <div></div>
                <div></div>
            </div>
            
        </nav>
    )
}

export default Navbar
