import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 10, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });


const OnlineDelivery = () => {
    return (
        <div data-aos="zoom-in-up" className='container mx-auto my-32'>
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