import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const routes = [
    {
        path: '/',
        title: 'Home',
    },
    {
        path: '/examen',
        title: 'Examen',
    },

];

const NavBarRouter = () => {
    return (
        <>
            <nav className="navbar">
                <ul className="nav-list">
                    {routes.map(route => (<li className="nav-item">
                        <NavLink exact to={route.path} activeClassName="active-link">
                            {route.title}
                        </NavLink>
                    </li>))}

                </ul>
            </nav>
        </>
    );
}
export default NavBarRouter;