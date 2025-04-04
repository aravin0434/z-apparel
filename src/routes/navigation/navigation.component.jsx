import { Link, Outlet } from "react-router-dom";
import { ReactComponent as Logo } from '../../assets/crown.svg'
import './navigation.styles.scss'
function Navigation() {
    return (
        <>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <Logo className="logo"/>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-links" to="/shop">Shop</Link>
                </div>
                <div className="nav-links-container">
                    <Link className="nav-links" to="/sign-in">Sign In</Link>
                </div>
            </div>
            <Outlet/>
        </>
    );
}

export default Navigation;