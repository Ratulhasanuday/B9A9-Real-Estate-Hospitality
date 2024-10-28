
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
const Login = () => {
        return (
            <div>
            <Navbar></Navbar>
            <div className="hero  h-full">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
                        <h2 className="text-center text-2xl mt-4">Please Login</h2>
                        <form  className="card-body">
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
                                <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
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