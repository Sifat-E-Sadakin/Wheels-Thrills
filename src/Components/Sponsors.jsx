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
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: true, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });

const Sponsors = () => {
    return (
        <div className='container mx-auto'>
            <h1 className='text-4xl text-center font-semibold mt-32 mb-10'>Wheels & Thrills Sponsor's</h1>
            <div data-aos="zoom-in" className='grid grid-cols-2 md:flex justify-around '>
                <div className='md:w-36 w-24'>
                    <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-1024.png" alt="" />
                    <h1 className='text-center text-xl font-medium'>React</h1>
                </div>
                <div className='md:w-36 w-24'>
                    <img src="https://cdn4.iconfinder.com/data/icons/logos-3/456/nodejs-new-pantone-black-1024.png" alt="" />
                    <h1 className='text-center text-xl font-medium'>Node Js</h1>
                </div>
                <div className='md:w-36 w-24'>
                    <img src="https://cdn4.iconfinder.com/data/icons/logos-3/512/mongodb-2-1024.png" alt="" />
                    <h1 className='text-center text-xl font-medium'>MongoDB</h1>
                </div>
                <div className='md:w-36 w-24'>
                    <img src="https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-1024.png" alt="" />
                    <h1 className='text-center text-xl font-medium'>Firebase</h1>
                </div>
                <div className='md:w-36 w-24'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="" />
                    <h1 className='text-center text-xl font-medium'>TailWind</h1>
                </div>
            </div>
            
        </div>
    );
};

export default Sponsors;