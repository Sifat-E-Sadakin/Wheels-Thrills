import { Link } from 'react-router-dom';
import pic from './../../public/images/404/2634442.jpg'

import React, { useEffect } from 'react';
import useTitle from '../Hooks/useTitle';


const NotFound = () => {
    useEffect(() => {
        window.scroll(0, 0);


    }, [])
    useTitle('404')
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("/images/404/2634442.jpg")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">WoHo You lost</h1>
                    <p className="mb-5">Go Back to Home</p>
                    <Link><button className="btn bg-yellow-300 btn-outline ">Home</button></Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;