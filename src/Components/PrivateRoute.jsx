import React, { useContext } from 'react';
import { userContext } from './UserProvider';
import { Navigate, useLocation } from 'react-router-dom';

import { Triangle } from  'react-loader-spinner'

const PrivateRoute = ({children}) => {

    let {user, loading} = useContext(userContext);

    let location = useLocation();
    // console.log(location);

    if(loading){
        return <div className='spinner'>
          <Triangle
        
        height="200"
        width="200"
        color="#000000"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
        </div>


    }

    if(user){
       return children
    }
    return ( <Navigate to='/login' state={{from: location}}></Navigate>
    );
};

export default PrivateRoute;