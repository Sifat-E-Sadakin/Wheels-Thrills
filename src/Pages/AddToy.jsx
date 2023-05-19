import React, { useContext } from 'react';
import { userContext } from '../Components/UserProvider';
import Swal from 'sweetalert2'


const AddToy = () => {

    let {user} = useContext(userContext)

    let submit = event=>{
        event.preventDefault()

        let photo = event.target.photo.value;
        let tName = event.target.tName.value;
        let sName = event.target.sName.value;
        let sEmail = event.target.sEmail.value;
        let subcategory = event.target.subcategory.value;
        let price = event.target.price.value;
        let rating = event.target.rating.value;
        let quantity = event.target.quantity.value;
        let description = event.target.description.value;

        // console.log({photo,tName,sName, sEmail, subcategory, price, rating,quantity, description} );
        let toy = {photo,tName,sName, sEmail, subcategory, price, rating,quantity, description}
        fetch('https://assignment-11-back-end.vercel.app/addToy',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toy)
        })
        .then(res=> res.json())
        .then(data => {
            // console.log(data);
            if(data.acknowledged){
                Swal.fire(`${tName}`,
                'Added Successfully',
                'success')
                event.target.reset()
            }
        })

    }
    return (
        <div className="container mx-auto">
            <form onSubmit={submit}  className="max-w-md mx-auto bg-white p-6 rounded shadow-md">
                <div className="mb-4">
                    <label htmlFor="photo" className="block text-gray-700 font-bold mb-2">
                        Photo of Toy
                    </label>
                    <input
                        type="text"
                        id="toyName"
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                        name='photo'
                        required
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
                    />
                </div>
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
                        type="text"
                        id="price"
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                        name='price'
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="rating" className="block text-gray-700 font-bold mb-2">
                        Rating
                    </label>
                    <input
                        type="text"
                        id="rating"
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                        name='rating'
                        required
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
                    />
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
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddToy;