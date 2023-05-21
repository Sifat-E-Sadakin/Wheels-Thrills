import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../Components/UserProvider';
import { Link } from 'react-router-dom';
import { data } from 'autoprefixer';
import Swal from 'sweetalert2';
import useTitle from '../Hooks/useTitle';

const MyToys = () => {

    useTitle('My Toys')
    let { user } = useContext(userContext);

    let [toys, setToys] = useState([])
    // const [order, setOrder] = useState('');

    let { email } = user

    // console.log(toys);


    let remove = async (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "Item will be removed permanently!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://assignment-11-back-end.vercel.app/remove/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data=>{
                        let remaining = toys.filter(toy => toy._id != id);
                        setToys(remaining)
                        // console.log(remaining);

                    })
                   

                Swal.fire(
                    'Deleted!',
                    'Item has been deleted.',
                    'success'
                )
            }
        })
    }


    let handleChange = event =>{
        
        let order= event.target.value;
        if(order=='ascending'){
            fetch(`https://assignment-11-back-end.vercel.app/asort?email=${email}`)
            .then(res=> res.json())
            .then(data=> setToys(data))

        }
        if(order=='descending'){
            fetch(`https://assignment-11-back-end.vercel.app/dsort?email=${email}`)
            .then(res=> res.json())
            .then(data=> setToys(data))

        }
        
    }
    // console.log(order);
    useEffect(() => {
        fetch(`https://assignment-11-back-end.vercel.app/email?email=${email}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])

    useEffect(() => {
        window.scroll(0, 0);


    }, [])

    return (
        <div className='container mx-auto'>
            <h1 className='text-center text-3xl my-10'>Toys of {user.displayName}</h1>

            <div className='flex justify-end'>
                <select id="order" className='btn btn-primary btn-outline'  onChange={handleChange}>
                    <option value="">Sort by Price</option>
                    <option value="ascending">Ascending</option>
                    <option value="descending">Descending</option>
                </select>
            </div>
            <div className=''>



                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    Remove
                                </th>
                                <th>
                                    Update
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
                                toys.map(toy => < tr key={toy._id}>

                                    <th>
                                        <button onClick={() => remove(toy._id)} className="btn btn-circle btn-outline btn-sm">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                        </button>
                                    </th>
                                    <th>
                                        <Link to={`/updateToy/${toy._id}`}><button className="btn btn-ghost btn-xs">Update</button></Link>
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
                </div>

            </div>
        </div>
    );
};

export default MyToys;