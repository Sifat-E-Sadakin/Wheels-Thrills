import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import useTitle from '../Hooks/useTitle';

const UpdateToy = () => {

    useEffect(() => {
        window.scroll(0, 0);


    }, [])

    useTitle('Update Toy')

    let toy = useLoaderData()
    // console.log(toy._id);

    let submit = event=>{

        event.preventDefault();
        let price = parseInt(event.target.price.value);
        let quantity = event.target.quantity.value;
        let description = event.target.description.value;

        

        let info = {price, quantity, description}

        fetch(`https://assignment-11-back-end.vercel.app/update/${toy._id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(info)
        })
        .then(res=> res.json())
        .then(data => {
            if(data.modifiedCount>0){
                Swal.fire(
                    'Updated Successfully',
                    'Now you can see the updated item',
                    'success'
                  )
            }
        })

    }
    return (
        <div className=' container mx-auto '>
            <h1 className='text-3xl font-semibold my-10 text-center'> Update Toy Info</h1>
            <form onSubmit={submit} className="bg-purple-200 max-w-xl mx-auto shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label htmlFor="price" className="block text-gray-700 text-sm font-bold mb-2">
                        Price
                    </label>
                    <input
                        type="number"
                        id="price"
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                        
                        defaultValue={toy.price}
                        name='price'
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="quantity" className="block text-gray-700 text-sm font-bold mb-2">
                        Available Quantity
                    </label>
                    <input
                        type="text"
                        id="quantity"
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                        defaultValue={toy.quantity}
                        name='quantity'
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
                        Detailed Description
                    </label>
                    <textarea
                        id="description"
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                        defaultValue={toy.description}
                        name='description'
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                
                >
                    update
                </button>
            </form>

        </div>
    );
};

export default UpdateToy;