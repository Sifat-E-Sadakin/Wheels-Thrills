import React, { useContext } from 'react';
import { userContext } from '../Components/UserProvider';

const Blog = () => {
    let {user} = useContext(userContext)
    // console.log(user);
    return (
        <div>
            <h1>Blog page</h1>
            
        </div>
    );
};

export default Blog;