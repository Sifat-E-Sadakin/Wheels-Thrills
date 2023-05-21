import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import React, { useEffect, useState } from 'react';
import { Rating } from '@mui/material';
import { Link } from 'react-router-dom';



const ToyTabs = () => {

    let [toys, setToys] = useState([])
    let [trucks, setTrucks] = useState([])
    let [cars, setCars] = useState([])
    let [bus, setBus] = useState([])
    let [train, setTrain] = useState([])
    // console.log(toys);



    useEffect(() => {
        fetch('https://assignment-11-back-end.vercel.app/alltoys')
            .then(res => res.json())
            .then(data => {
                setToys(data)
                // console.log('loaded');

                let getTrucks = toys.filter(toy => toy.subcategory == 'Truck')
                setTrucks(getTrucks);
                let getCars = toys.filter(toy => toy.subcategory == 'Car')
                setCars(getCars)
                let getBus = toys.filter(toy => toy.subcategory == 'Bus')
                setBus(getBus);
                let getTrain = toys.filter(toy => toy.subcategory == 'Train')
                setTrain(getTrain)
            })




    }, [toys])










    return (
        <div className='container mx-auto my-20'>
            <h1 className='text-center text-4xl font-semibold my-12'>Find Your Vehicle From Different Category</h1>
            <Tabs >
                <TabList >
                    <Tab>Car</Tab>
                    <Tab>Bus</Tab>
                    <Tab>Truck</Tab>
                    <Tab>Train</Tab>

                </TabList>

                <TabPanel >
                    <div className='grid lg:grid-cols-3 gap-5 '>
                        {
                            cars.map(vehicle => <div key={vehicle._id}>
                                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                                    <figure className='max-h-60'><img src={vehicle.photo} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{vehicle.tName}</h2>
                                        <div>
                                            <p className='text-base font-medium'>Price : <span className='font-medium'>{vehicle.price} Taka /=</span></p>

                                        </div>
                                        <div className="card-actions justify-between">
                                            <div className='flex gap-3'>
                                                <Rating name="read-only" value={vehicle.rating} precision={0.5} readOnly /> <span className='text-base font-normal'>{vehicle.rating}</span>
                                            </div>
                                            <Link to={`/toyDetails/${vehicle._id}`}><button className='btn btn-primary'>View Details</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid lg:grid-cols-3 gap-5'>
                        {
                            bus.map(vehicle => <div key={vehicle._id}>
                                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                                    <figure className='max-h-60'><img src={vehicle.photo} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{vehicle.tName}</h2>
                                        <div>
                                            <p className='text-base font-medium'>Price : <span className='font-medium'>{vehicle.price} Taka /=</span></p>

                                        </div>
                                        <div className="card-actions justify-between">
                                            <div className='flex gap-3'>
                                                <Rating name="read-only" value={vehicle.rating} precision={0.5} readOnly /> <span className='text-base font-normal'>{vehicle.rating}</span>
                                            </div>
                                            <Link to={`/toyDetails/${vehicle._id}`}><button className='btn btn-primary'>View Details</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        }

                    </div>
                </TabPanel>
                <TabPanel >
                    <div className='grid lg:grid-cols-3 gap-5'>
                        {
                            trucks.map(vehicle => <div key={vehicle._id}>
                                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                                    <figure className='max-h-60'><img src={vehicle.photo} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{vehicle.tName}</h2>
                                        <div>
                                            <p className='text-base font-medium'>Price : <span className='font-medium'>{vehicle.price} Taka /=</span></p>

                                        </div>
                                        <div className="card-actions justify-between">
                                            <div className='flex gap-3'>
                                                <Rating name="read-only" value={vehicle.rating} precision={0.5} readOnly /> <span className='text-base font-normal'>{vehicle.rating}</span>
                                            </div>
                                            <Link to={`/toyDetails/${vehicle._id}`}><button className='btn btn-primary'>View Details</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid lg:grid-cols-3 gap-5'>
                        {
                            train.map(vehicle => <div key={vehicle._id}>
                                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                                    <figure className='max-h-60'><img src={vehicle.photo} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{vehicle.tName}</h2>
                                        <div>
                                            <p className='text-base font-medium'>Price : <span className='font-medium'>{vehicle.price} Taka /=</span></p>

                                        </div>
                                        <div className="card-actions justify-between">
                                            <div className='flex gap-3'>
                                                <Rating name="read-only" value={vehicle.rating} precision={0.5} readOnly /> <span className='text-base font-normal'>{vehicle.rating}</span>
                                            </div>
                                            <Link to={`/toyDetails/${vehicle._id}`}><button className='btn btn-primary'>View Details</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </TabPanel>
            </Tabs>


        </div>
    );
};

export default ToyTabs;