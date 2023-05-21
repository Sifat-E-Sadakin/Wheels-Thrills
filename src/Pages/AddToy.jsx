import React, { useContext, useEffect } from 'react';
import { userContext } from '../Components/UserProvider';
import Swal from 'sweetalert2'
import useTitle from '../Hooks/useTitle';


const AddToy = () => {

    useEffect(() => {
        window.scroll(0, 0);


    }, [])

    useTitle('Add Toy')
    let { user } = useContext(userContext)

    let submit = event => {
        event.preventDefault()

        let photo = event.target.photo.value;
        let tName = event.target.tName.value;
        let sName = event.target.sName.value;
        let sEmail = event.target.sEmail.value;
        let subcategory = event.target.subcategory.value;
        let price = parseInt(event.target.price.value);

        let rating = event.target.rating.value;
        let quantity = event.target.quantity.value;
        let description = event.target.description.value;

        // console.log({photo,tName,sName, sEmail, subcategory, price, rating,quantity, description} );
        let toy = { photo, tName, sName, sEmail, subcategory, price, rating, quantity, description }
        // console.log(toy);
        fetch('https://assignment-11-back-end.vercel.app/addToy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toy)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.acknowledged) {
                    Swal.fire(`${tName}`,
                        'Added Successfully',
                        'success')
                    event.target.reset()
                }
            })

    }
    return (
        <div className="container mx-auto">
            <div>
                <h1 className='text-center text-3xl my-10'>Add Toy </h1>
            </div>
            <form onSubmit={submit} className="max-w-sm lg:max-w-xl mx-auto bg-purple-200 p-6 rounded shadow-md">
                <div className='lg:flex justify-between '>
                    <div className="mb-4">
                        <label htmlFor="photo" className="block text-gray-700 font-bold mb-2">
                            Photo of Toy
                        </label>
                        <input
                            type="text"
                            id="toyName"
                            className="w-full px-3  py-2 border border-gray-300 rounded"
                            name='photo'
                            required
                            placeholder='Photo URL of Toy'
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="toyName" className="block text-gray-700 font-bold mb-2">
                            Toy Name
                        </label>
                        <input
                            type="text"
                            id="toyName"
                            className="w-full px-3 py-2 border border-gray-300 rounded"
                            name='tName'
                            required
                            placeholder='Toy Name'
                        />
                    </div>
                </div>
                <div className='lg:flex justify-between '>
                    <div className="mb-4">
                        <label htmlFor="sellerName" className="block text-gray-700 font-bold mb-2">
                            Seller Name
                        </label>
                        <input
                            type="text"
                            id="sellerName"
                            className="w-full px-3 py-2 border border-gray-300 rounded"
                            name='sName'
                            defaultValue={user && user.displayName}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="sellerEmail" className="block text-gray-700 font-bold mb-2">
                            Seller Email
                        </label>
                        <input
                            type="email"
                            id="sellerEmail"
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded"
                            name='sEmail'
                            defaultValue={user && user.email}
                        />
                    </div>
                </div>
                <div className='lg:flex justify-between'>
                    <div className="mb-4">
                        <label htmlFor="subcategory" className="block text-gray-700 font-bold mb-2">
                            Subcategory
                        </label>
                        <select
                            id="subcategory"
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded"
                            name='subcategory'
                        >
                            <option value="Car">Car</option>
                            <option value="Truck">Truck</option>
                            <option value="Bus">Bus</option>
                            <option value="Train">Train</option>

                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="price" className="block text-gray-700 font-bold mb-2">
                            Price
                        </label>
                        <input
                            type="number"
                            id="price"
                            className="w-full px-3 py-2 border border-gray-300 rounded"
                            name='price'
                            required
                            placeholder='Price'
                        />
                    </div>
                </div>
                <div className='lg:flex justify-between'>
                    <div className="mb-4">
                        <label htmlFor="rating" className="block text-gray-700 font-bold mb-2">
                            Rating
                        </label>
                        <input
                            type="number"
                            id="rating"
                            className="w-full px-3 py-2 border border-gray-300 rounded"
                            name='rating'
                            required
                            step='any'
                            placeholder='0 to 5'
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="quantity" className="block text-gray-700 font-bold mb-2">
                            Available Quantity
                        </label>
                        <input
                            type="text"
                            id="quantity"
                            className="w-full px-3 py-2 border border-gray-300 rounded"
                            name='quantity'
                            required
                            placeholder='Available Quantity'
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
                        Detail Description
                    </label>
                    <textarea
                        id="description"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                        name='description'
                        placeholder='Detail Description'
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                >
                    Add item
                </button>
            </form>
        </div>
    );
};

export default AddToy;