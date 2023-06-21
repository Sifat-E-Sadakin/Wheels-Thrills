import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../Components/Footer';
import { Audio, Triangle } from 'react-loader-spinner';
import '../Components/styles/Spinner.css'

const Home = () => {

    const navigation = useNavigation();


    return (
        <div>
            <Navbar></Navbar>
            
            <div className='spinner'>
                {navigation.state == 'loading' ? <Triangle
                    height="300"
                    width="300"
                    color="#000000"
                    ariaLabel="triangle-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                /> : <></>}
            </div>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default Home;