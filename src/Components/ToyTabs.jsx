import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import React, { useEffect, useState } from 'react';



const ToyTabs = () => {

    let [toys, setToys] = useState([])
    let [trucks, setTrucks] = useState([])
   
    

    useEffect(() => {
        fetch('http://localhost:3000/toys')
            .then(res => res.json())
            .then(data => setToys(data))

    
            let getTrucks = toys.filter(toy => toy.subcategory == 'Truck')
            setTrucks(getTrucks)
    }, [])




    

    return (
        <div className='container mx-auto'>
            <Tabs>
                <TabList>
                    <Tab>Car</Tab>
                    <Tab>Bus</Tab>
                    <Tab>Truck</Tab>
                </TabList>

                <TabPanel>
                    {/* <h2>Any content 1</h2> */}
                    {
                      trucks.map(toy=>   <h2>{toy.tName}</h2>  )

                        
                    }
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
                </TabPanel>
            </Tabs>


        </div>
    );
};

export default ToyTabs;