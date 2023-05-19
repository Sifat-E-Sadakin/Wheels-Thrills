import React from 'react';
import bg from './../../public/images/BG/black-friday-elements-assortment.jpg'
import './styles/Banner.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

// ..

// You can also pass an optional settings object
// below listed default settings
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

const Banner = () => {
    return (
        <div data-aos="fade-down" className=' ' >
            <div className="bg-[url('/images/BG/black-friday-elements-assortment.jpg')] bg-cover bg-center bg-no-repeat  ">
                <div className='container mx-auto h-[620px] ' d>
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