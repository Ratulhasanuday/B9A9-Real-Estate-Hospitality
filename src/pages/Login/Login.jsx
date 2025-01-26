import { Link, useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye'
import {  useContext, useState } from "react";
import { AuthContext } from '../../provider/AuthPovider';
const Login = () => {
    const location=useLocation();
    console.log("location in the login page",location);
    const navigate=useNavigate();
    
    const {signIn}=useContext(AuthContext);
    const handlaeRegister = e => {
        e.preventDefault();
        const form= new FormData(e.currentTarget)
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
        signIn(email,password)
        .then(result=>{
            console.log(result.user);
            //navigate after login
            navigate(location?.state?location.state:"/")
        })
        .catch(error=>{
            console.error(error);
        })
    }
    const [password, setPassword] = useState("");
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff);
    const handleToggle = () => {
        if (type === 'password') {
            setIcon(eye);
            setType('text')
        } else {
            setIcon(eyeOff)
            setType('password')
        }
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero h-full pt-16">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
                        <h2 className="text-center text-2xl mt-4">Please Login</h2>
                        <form onSubmit={handlaeRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="flex">
                                    <input
                                        type={type}
                                        name="password" placeholder="password" className="input input-bordered"
                                        onChange={(e) => setPassword(e.target.value)}
                                        required />
                                    <span className="flex justify-around items-center" onClick={handleToggle}>
                                        <Icon class="absolute mr-10" icon={icon} size={25} />
                                    </span>
                                </div>
                            </div>
                            <div className="form-control ">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p className="text-sm">Don't have an account? <Link to="/register" className="font-bold text-[#745d5d]">Register</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;