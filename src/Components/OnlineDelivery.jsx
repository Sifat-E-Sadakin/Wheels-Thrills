import React from 'react';

const OnlineDelivery = () => {
    return (
        <div className='container mx-auto my-32'>
            <div className=" ">
                <div className=" lg:flex justify-center gap-10 space-y-3 lg:flex-row">
                    <img src="https://img.freepik.com/free-vector/hand-drawn-flat-design-delivery-concept_23-2149154530.jpg?w=1060&t=st=1684448434~exp=1684449034~hmac=03dcabeed741617295d48eb2712d155a0b8cc8abfbaf5d70eb88a840edd8baad" className="lg:max-w-lg rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Online Delivery Available !!!</h1>
                        <p className="py-6 text-lg ">Get it Delivered, Stress-Free: Sit back, relax, and let us handle the delivery. Enjoy the convenience of having your purchases brought right to your doorstep.</p>
                        <button className="btn btn-primary">Order Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default OnlineDelivery;