import { Link, useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye'
import { useContext, useState } from "react";
import { AuthContext } from '../../provider/AuthPovider';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import { FaGoogle } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

const Login = () => {
    const location = useLocation();
    console.log("location in the login page", location);
    const navigate = useNavigate();
    const { signIn,singInWithGoogle } = useContext(AuthContext);
    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
        if (password.length < 6) {
            toast.error("Password must be at least 6 characters long!");
            return;
        }
        signIn(email, password)
            .then(result => {
                console.log(result.user);
                toast.success("Login successful!", { autoClose: 3000, position: "top-right" });
                setTimeout(() => {
                    navigate(location?.state ? location.state : "/");
                }, 3000);
            })
            .catch(error => {
                console.error(error);
                toast.error("Login failed!", { autoClose: 3000, position: "top-right" });
            });
    }

    const handleGoogleLogin = () => {
        singInWithGoogle()
            .then(result => {
                console.log(result.user);
                toast.success("Google Login Success!", { autoClose: 3000, position: "top-right" });
                setTimeout(() => {
                    navigate(location?.state ? location.state : "/");
                }, 3000);
            })
            .catch(error => {
                console.error(error);
                toast.error("Google Login Failed!",{ autoClose: 3000, position: "top-right" } );
            });
    };
    const [password, setPassword] = useState("");
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff);

    const handleToggle = () => {
        if (type === 'password') {
            setIcon(eye);
            setType('text');
        } else {
            setIcon(eyeOff);
            setType('password');
        }
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="hero h-full pt-16">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <h2 className="text-center text-2xl mt-4">Please Login</h2>
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="flex">
                                    <input
                                        type={type}
                                        name="password"
                                        placeholder="password"
                                        className="input input-bordered"
                                        onChange={(e) => setPassword(e.target.value)}
                                       
                                    />
                                    <span className="flex justify-around items-center" onClick={handleToggle}>
                                        <Icon className="absolute mr-10" icon={icon} size={25} />
                                    </span>
                                </div>
                            </div>
                            <div className="form-control">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p className="text-sm">
                                Don't have an account? <Link to="/register" className="font-bold text-[#745d5d]">Register</Link>
                            </p>
                            <div>
                                <div className="form-control">
                                    <button onClick={handleGoogleLogin} className="btn "> <FaGoogle />Google Login</button>
                                </div>
                                <div className="form-control mt-5">
                                    <button className="btn ">
                                    <FaFacebookF />
                                    Facebook Login</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Login;
