import React, { useContext, useState } from 'react';
import picture from './../../public/images/Login/Data_security_05.jpg'
import { userContext } from '../Components/UserProvider';
import useTitle from '../Hooks/useTitle';

const SignUp = () => {

    let {createUser} = useContext(userContext);

    let [err, setErr] = useState(null)

    let submit = event =>{

        useTitle('Sign Up')
        event.preventDefault();

        let email = event.target.email.value
        let password = event.target.password.value

        console.log(email, password);
        setErr(null)
        createUser(email, password)
        .then(user=>{
            let newUser= user.user
            console.log(newUser);
        })
        .catch(err=> setErr(err.message))

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
                                        <input name='name' type="text" placeholder="Name" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input name='email' type="email" placeholder="email" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Photo URL</span>
                                        </label>
                                        <input name='photo' type="text" placeholder="Photo URL" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input name='password' type="text" placeholder="password" className="input input-bordered" />

                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Confirm Password</span>
                                        </label>
                                        <input name='cPassword' type="text" placeholder="Confirm password" className="input input-bordered" />

                                    </div>
                                    {err && <p className='text-error'>{err}</p>}
                                    <div className="form-control mt-6">
                                        <input type="submit" value='Sign Up' className='btn btn-primary' />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default SignUp;