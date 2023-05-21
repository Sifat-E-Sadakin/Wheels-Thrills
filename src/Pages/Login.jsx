import React, { useContext, useEffect, useState } from 'react';
import picture from './../../public/images/Login/Data_security_05.jpg'
import { userContext } from '../Components/UserProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useTitle from '../Hooks/useTitle';
import { Google } from '@mui/icons-material';

const Login = () => {

    useEffect(() => {
        window.scroll(0, 0);


    }, [])

    useTitle('Login')
    let { signIn, googlePopUp } = useContext(userContext)
    let [err, setErr] = useState(null)

    let location = useLocation();
    // console.log(location);
    let navigate = useNavigate();

    let go = location.state?.from?.pathname || '/';

    let handelGooglePopUp = ( )=>{
        googlePopUp()
        .then(user=>{
            navigate(go)
        })
    }


    let submit = event => {
        event.preventDefault();

        let email = event.target.email.value
        let password = event.target.password.value



        // console.log(email, password);
        setErr(null);
        signIn(email, password)
        .then(user=>{
            
            navigate(go)
        })
        .catch(err=> setErr(err.message))
    }

    return (
        <div>
            <div className="hero min-h-screen ">

                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <div className='w-[400px]'>

                            <img src={picture} alt="" />
                        </div>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className='text-2xl text-center font-semibold p-3'>login From Here</h1>
                        <form onSubmit={submit}>
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input name='email' required type="text" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input name='password' required type="password" placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                    <label className="label">
                                        <p>New in Wheels & Thrills <Link to='/signUp' className='btn btn-link'>Sign Up Here</Link> </p>
                                    </label>
                                    {err && <p className='text-error'>{err}</p>}
                                </div>
                                <div className="form-control mt-6">
                                   <input type="submit" value='Login' className='btn btn-primary' />
                                </div>
                                
                            </div>
                        </form>
                        <div className=" flex justify-center mb-6">
                                <button onClick={handelGooglePopUp} className='btn btn-primary btn-outline'><Google></Google><span className='ml-2'> Sign Up with google</span></button>
                            </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;