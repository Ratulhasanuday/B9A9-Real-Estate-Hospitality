import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthPovider";

const Navbar = () => {
    const {user,logOut}=useContext(AuthContext);
    const handleSignOut=()=>{
        logOut()
        .then(resutl=>{console.log(resutl);
        })
        .catch(error=>{
            console.error(error);
            
        })
    }
    const nav = <>
        <li className="font-bold"><NavLink to="/" >Home</NavLink></li>
        <li className="font-bold"><NavLink to="/ourService">Our Service</NavLink></li>
        <li className="font-bold"><NavLink to="/map">Map</NavLink></li>
        <li className="font-bold"><NavLink to="/about">About</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100 fixed top-0 w-full z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {
                            nav
                        }
                    </ul>
                </div>
                <Link to={'/'} className="text-xl font-bold">REstate</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        nav
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?
                    <Link onClick={handleSignOut} className="btn">Sign Out</Link>
                    :
                    <Link to="/login" className="btn">Login</Link>
                }
                
            </div>
        </div>
    );
};

export default Navbar;