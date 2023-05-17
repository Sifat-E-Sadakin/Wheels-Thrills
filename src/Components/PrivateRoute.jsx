import React, { useContext } from 'react';
import { userContext } from './UserProvider';
import { Navigate, useLocation } from 'react-router-dom';

import { Triangle } from  'react-loader-spinner'

const PrivateRoute = ({children}) => {

    let {user, loading} = useContext(userContext);

    let location = useLocation();
    // console.log(location);

    if(loading){
        return <Triangle
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />


    }

    if(user){
       return children
    }
    return ( <Navigate to='/login' state={{from: location}}></Navigate>
    );
};

export default PrivateRoute;