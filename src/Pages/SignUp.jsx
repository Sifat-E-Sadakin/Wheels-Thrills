import React, { useContext, useState } from 'react';
import picture from './../../public/images/Login/Data_security_05.jpg'
import { userContext } from '../Components/UserProvider';
import useTitle from '../Hooks/useTitle';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Google } from '@mui/icons-material';


const SignUp = () => {
    useTitle('Sign Up')

    let { createUser, updateUser, googlePopUp } = useContext(userContext);



    let [err, setErr] = useState(null)

    let location = useLocation();
    // console.log(location);
    let navigate = useNavigate();

    let go = location.state?.from?.pathname || '/';

    let handelGooglePopUp = () => {
        googlePopUp()
            .then(user => {
                navigate(go)
            })
    }

    let submit = event => {


        event.preventDefault();

        let name = event.target.name.value
        let photo = event.target.photo.value
        let email = event.target.email.value
        let password = event.target.password.value
        let cPassword = event.target.cPassword.value

        if (password != cPassword) {
            setErr('Password did not match')
            return;
        }

        console.log(name, photo);
        setErr(null)
        createUser(email, password)
            .then(user => {
                let newUser = user.user
                console.log(newUser);
                updateUser(name, photo)
                    .then(() => {
                        navigate(go)

                    })




            })
            .catch(err => setErr(err.message))


    }
    return (
        <div>
            <div>
                <div className="hero min-h-screen ">

                    <div className="hero-content flex-col lg:flex-row">
                        <div className="text-center lg:text-left">
                            <div className='w-[400px]'>

                                <img src={picture} alt="" />
                            </div>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <h1 className='text-2xl text-center font-semibold p-3'>Sign Up From Here</h1>
                            <form onSubmit={submit}>
                                <div className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input name='name' required type="text" placeholder="Name" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input name='email' required type="email" placeholder="email" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Photo URL</span>
                                        </label>
                                        <input name='photo' required type="text" placeholder="Photo URL" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input name='password' required type="password" placeholder="password" className="input input-bordered" />

                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Confirm Password</span>
                                        </label>
                                        <input name='cPassword' required type="password" placeholder="Confirm password" className="input input-bordered" />

                                    </div>
                                    {err && <p className='text-error'>{err}</p>}
                                    <label className="label">
                                        <p>Already have an account<Link to='/login' className='btn btn-link'>Login Here</Link> </p>
                                    </label>
                                    <div className="form-control mt-6">
                                        <input type="submit" value='Sign Up' className='btn btn-primary' />
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

        </div>
    );
};

export default SignUp;