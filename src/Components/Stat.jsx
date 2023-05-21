import React, { useContext, useEffect, useState } from 'react';
import { userContext } from './UserProvider';
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


const Stat = () => {

    let {user} = useContext(userContext)

    let [item, setItem] = useState([])


    useEffect(()=>{
        fetch(`https://assignment-11-back-end.vercel.app/alltoys`)
        .then(res=>res.json())
        .then(data=> setItem(data))
    },[])



    
    return (
        <div data-aos="flip-up" className='container mx-auto flex justify-center '>
            <div className="stats stats-vertical lg:stats-horizontal shadow-2xl">

                <div className="stat">
                    <div className="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </div>
                    <div className="stat-title">Total Item</div>
                    <div className="stat-value text-primary">{item.length}</div>
                    <div className="stat-desc">increasing rapidly</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div className="stat-title">Page Views</div>
                    <div className="stat-value text-secondary">2.2K</div>
                    <div className="stat-desc">increasing rapidly</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <div className="avatar online">
                            <div className="w-16 rounded-full">
                                <img src={user && user.photoURL} />
                            </div>
                        </div>
                    </div>
                    <div className="stat-value">{user?  user.displayName : <>User Name</> }</div>
                    <div className="stat-title">{user?  user.email : <>User Email</> }</div>
                    <div className="stat-desc text-secondary">Thanks for being here...</div>
                </div>

            </div>

        </div>
    );
};

export default Stat;