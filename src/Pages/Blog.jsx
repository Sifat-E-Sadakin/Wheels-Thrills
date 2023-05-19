import React, { useContext } from 'react';
import { userContext } from '../Components/UserProvider';
import useTitle from '../Hooks/useTitle';

const Blog = () => {
    let {user} = useContext(userContext)
    useTitle('Blog')
    // console.log(user);
    return (
        <div>
            <h1>Blog page</h1>
            
        </div>
    );
};

export default Blog;