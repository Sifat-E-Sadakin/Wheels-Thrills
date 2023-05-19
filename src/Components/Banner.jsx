import React from 'react';
import bg from './../../public/images/BG/black-friday-elements-assortment.jpg'

const Banner = () => {
    return (
        <div className=' ' >
            <div className="bg-[url('/images/BG/black-friday-elements-assortment.jpg')] bg-cover bg-center bg-no-repeat  ">
                <div className='container mx-auto h-[620px] '>
                    <h1 className='text-5xl font-semibold pt-24' >Unleash the <br /> thrill of <br /> Wheels & Thrills!</h1>
                    <p className='w-1/2 text-lg mt-5 lg:hidden  '>
                        Experience pure exhilaration at Wheels & Thrills! Our collection of toy cars will ignite your senses and transport you to a world of non-stop fun. </p>
                    <p className='w-1/2 text-lg mt-5 ' id='hide'>
                        Experience pure exhilaration at Wheels & Thrills! Our collection of toy cars will ignite your senses and transport you to a world of non-stop fun. Unleash your inner racer as you zoom through twists, turns, and thrilling adventures. From sleek sports cars to rugged off-roaders, our wide selection guarantees excitement for every enthusiast. Get ready to rev up the excitement and discover the thrill of Wheels & Thrills today!</p>

                </div>

            </div>

        </div>
    );
};

export default Banner;