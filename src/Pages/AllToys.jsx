import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import useTitle from '../Hooks/useTitle';

const AllToys = () => {

    useEffect(() => {
        window.scroll(0, 0);


    }, [])

    useTitle('All Toys')

    let toys = useLoaderData();

    let [findToy, setFindToy] = useState(toys)

    let remove = () => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Only Admin Can delete item from here',
            footer: '<a href="">Join Our team to become an admin</a>'
        })

    }


    let showAll = async () => {

        let res = await fetch('https://assignment-11-back-end.vercel.app/alltoys')
        let data = await res.json();
        setFindToy(data)
        let btn = document.getElementById('all')
        btn.style.display = 'none'



    }





    const find = async () => {
        try {
            let item = document.getElementById('search').value
            console.log(item);
            const response = await fetch(`https://assignment-11-back-end.vercel.app/toys/find?tName=${item}`);
            const data = await response.json();
            console.log(data);
            setFindToy(data);
            if (data) {
                let input = document.getElementById('search')
                input.value = ''
            }

            if (!item) {
                setFindToy(toys)

            }
        } catch (error) {
            console.error('Error searching data:', error);
        }
    };





    return (
        <div className='container mx-auto'>
            <div className='text-center text-3xl my-10 space-y-5'>
                <h1>List Of All Available Toys</h1>

                <div className='space-x-3 items-center'>
                    <input id='search' type="text" placeholder="Search Toy" className="input input-bordered input-secondary w-full max-w-xs" />
                    <button onClick={() => find()} className='btn btn-primary'>Search</button>
                </div>
            </div>


            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                Remove
                            </th>
                            <th>Toy Name</th>
                            <th>Seller Name</th>
                            <th>Sub Category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>View Details</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            findToy.map(toy => < tr key={toy._id}>

                                <th>
                                    <button onClick={remove} className="btn z-10 btn-circle btn-outline btn-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={toy.photo} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{toy.tName}</div>

                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {toy.sName}
                                    <br />

                                </td>
                                <td>{toy.subcategory}</td>
                                <td>{toy.price} /=</td>
                                <td>{toy.quantity}</td>
                                <th>
                                    <Link to={`/toyDetails/${toy._id}`}><button className="btn btn-ghost btn-xs">View Details</button></Link>
                                </th>
                            </tr>
                            )
                        }



                    </tbody>


                </table>

                <div className='text-center my-5'>
                    <button id='all' onClick={showAll} className='btn btn-primary '>All toys</button>
                </div>
            </div>

        </div>
    );
};

export default AllToys;