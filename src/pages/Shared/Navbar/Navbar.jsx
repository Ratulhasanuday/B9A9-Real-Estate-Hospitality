import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const nav = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
    </>
    return (
        <div className="navbar bg-">
        <div className="navbar-start">
            <h1 className="text-2xl">Ratul Real Estate</h1>
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">

                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm text-2xl dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    {
                        nav
                    }
                </ul>
            </div>

        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-lg font-semibold">
                {
                    nav
                }
            </ul>
        </div>
        <div className="navbar-end">
            <img src="/src/assets/user.png" className="w-10 rounded-full mr-2" alt="" />
        
                    <Link to="/login">
                        <button className="btn">Log In</button>
                    </Link>
            
        </div>

    </div>
    );
};

export default Navbar;