import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from './UserProvider';

const Navbar = () => {
    let { logout, user } = useContext(userContext)
    console.log(user);
    return (
        <div className='bg-purple-300 sticky top-0 z-20'>
            <div className="navbar   container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li tabIndex={0}>
                                <a className="justify-between">
                                    Parent
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">Wheels & Thrills</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-5">
                        <Link to='/'>Home</Link>
                        <Link to='/allToys'>All Toys</Link>
                        {user && <Link to='/myToys'>My Toys</Link>}
                        {user && <Link to='/addToy'>Add Toy</Link>}
                        <Link to='/signUp'>Sign Up</Link>
                        <Link to='/login'>Login</Link>
                        <Link to='/blog'>Blog</Link>
                        <button onClick={logout}>Sign Out</button>
                    </ul>
                </div>
                <div className="navbar-end ">
                    {user && <p id='hide' className='lg:mr-3 '>Hi, <span className='font-bold  '>{user.displayName}</span> </p>}
                    {user ? <div className="avatar h-14 w-14">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={user.photoURL} />
                        </div>
                    </div>
                        : <button>Login</button>}

                </div>
            </div>

        </div>
    );
};

export default Navbar;