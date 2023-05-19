import React from 'react';
import Marquee  from "react-fast-marquee";




const GallerySection = () => {


        return (
            <div data-aos="fade-down" className='container mx-auto'>
                <h1 className='text-4xl font-semibold text-center my-14' >Best-rated Toys</h1>
                
                <Marquee pauseOnHover={true} className='rounded-xl'  >
                <div className="carousel carousel-center ">
                    
                    <div className="carousel-item max-w-sm">
                        <img src="https://images.pexels.com/photos/385997/pexels-photo-385997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Pizza" />
                    </div>


        
                   
                    <div className="carousel-item max-w-md">
                        <img src="https://images.pexels.com/photos/249343/pexels-photo-249343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Pizza" />
                    </div>

                    <div className="carousel-item max-w-md">
                        <img src="https://images.pexels.com/photos/1648419/pexels-photo-1648419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Pizza" />
                    </div>

                    <div className="carousel-item max-w-md">
                        <img src="https://images.pexels.com/photos/1648349/pexels-photo-1648349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Pizza" />
                    </div>

                    <div className="carousel-item max-w-md">
                        <img src="https://images.pexels.com/photos/6112289/pexels-photo-6112289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Pizza" />
                    </div>

                    <div className="carousel-item max-w-md">
                        <img src="https://images.pexels.com/photos/1648419/pexels-photo-1648419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Pizza" />
                    </div>

                </div>

                </Marquee>
                

            </div>
        );
    };

export default GallerySection;