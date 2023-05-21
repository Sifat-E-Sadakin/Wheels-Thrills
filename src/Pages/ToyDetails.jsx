import { Rating } from '@mui/material';
import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../Hooks/useTitle';

const ToyDetails = () => {

    useEffect(() => {
        window.scroll(0, 0);


    }, [])

    useTitle('Toy Details')
    let toy = useLoaderData();
    console.log(toy);
    return (
        <div className='container mx-auto'>
            <h1 className='text-4xl font-semibold text-center my-12'>Toy Details</h1>
            <div className="  ">
                <div className=" lg:flex lg:flex-row gap-12 space-y-5">
                    <div className=''>
                        <img src={toy.photo} className="max-w-sm lg:max-w-xl rounded-lg shadow-2xl" />
                    </div>

                    <div className='space-y-5'>
                        <h1 className='text-4xl ' >Toy Name:           <span className='font-semibold'>{toy.tName}</span></h1>
                        <h1 className='text-3xl ' >Seller Name:        <span className='font-semibold'>{toy.sName}</span></h1>
                        <h1 className='text-3xl ' >Seller Email:       <span className='font-semibold'>{toy.sEmail}</span></h1>
                        <h1 className='text-3xl ' >Price:              <span className='font-semibold'>{toy.price}</span> Taka</h1>
                        <h1 className='text-3xl ' >Available Quantity: <span className='font-semibold'>{toy.quantity}</span></h1>
                        <div className=' flex gap-2'>
                            <Rating name="read-only" size='large'  value={toy.rating} precision={0.5} readOnly /> <span>{toy.rating}</span></div>
                        <p className="py-6 text-xl">Toy Description:  <span className='font-semibold'>{toy.description}</span></p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;