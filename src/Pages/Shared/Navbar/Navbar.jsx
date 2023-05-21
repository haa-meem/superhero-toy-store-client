import { Link } from 'react-router-dom';
import navlogo from '../../../assets/superhero_toy_store.png';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
const Navbar = () => {
    const navItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/alltoys">All Toys</Link></li>
        <li><Link to="/mytoys">My Toys</Link></li>
        <li><Link to="/atoy">Add A Toy</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
    </>
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then()
            .error(error => console.log(error.message));
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    <img src={navlogo} width="150px" alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {user && (
                    <div className="relative">
                        <button
                            type="button"
                            className="tooltip tooltip-bottom hover:tooltip-open"
                            data-tip={user.displayName}
                        >
                            <img src={user?.photoURL} alt={user.displayName} className="rounded me-2 h-12 w-12" />
                        </button>
                    </div>
                )}
                {user ? (
                    <button
                        onClick={handleLogOut}
                        className="btn btn-warning"
                    >
                        Logout
                    </button>
                ) : (
                    <Link to="/login" className="btn btn-secondary">
                        Login
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;