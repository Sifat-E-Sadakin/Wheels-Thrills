import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from './UserProvider';
import logo from './../../public/images/Logo/Screenshot_2023-05-19_225627-removebg-preview.png'
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip as ReactTooltip, Tooltip } from 'react-tooltip'
import ActiveRoute from './ActiveRoute';


const Navbar = () => {
    let { logout, user } = useContext(userContext)
    // console.log(user);
    return (
        <div className='bg-purple-300 sticky top-0 z-20'>
            <div className="navbar   container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <Link to='/'>Home</Link>
                            <Link to='/allToys'>All Toys</Link>
                            {user && <Link to='/myToys'>My Toys</Link>}
                            {user && <Link to='/addToy'>Add Toy</Link>}
                            <Link to='/blog'>Blog</Link>
                            {user ? <></> : <Link to='/signUp'>Sign Up</Link>}
                            {/* <Link to='/login'>Login</Link> */}
                            {user && <button onClick={logout}>Sign Out</button>}
                        </ul>
                    </div>
                    <div className='flex items-center flex-col'>
                        <Link to='/' className="btn btn-ghost normal-case text-xl"><img src={logo} alt="" /> </Link>
                        <span id='hide' className='text-lg font-bold'>Wheels & Thrills</span>

                    </div>


                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-5">
                        <ActiveRoute to='/'>Home</ActiveRoute>
                        <ActiveRoute to='/allToys'>All Toys</ActiveRoute>
                        {user && <ActiveRoute to='/myToys'>My Toys</ActiveRoute>}
                        {user && <ActiveRoute to='/addToy'>Add Toy</ActiveRoute>}
                        <ActiveRoute to='/blog'>Blog</ActiveRoute>
                        {user ? <></> : <ActiveRoute to='/signUp'>Sign Up</ActiveRoute>}
                        {/* <Link to='/login'>Login</Link> */}
                        {user && <button onClick={logout}>Sign Out</button>}
                    </ul>
                </div>
                <div className="navbar-end ">
                    {user && <p className='lg:mr-3 '>Hi, <span className='font-bold  '>{user.displayName}</span> </p>}
                    {user ? <div className="avatar h-14 w-14">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img data-tooltip-id='my-tooltip' data-tooltip-content={user ? user.displayName : <span>User Name</span>} src={user.photoURL} />
                        </div>
                    </div>
                        : <Link to='/login'><button className='btn btn-primary'>Login</button></Link>}

                </div>
            </div>
            <Tooltip id="my-tooltip" />
        </div>
    );
};

export default Navbar;