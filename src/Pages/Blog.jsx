import React, { useContext, useEffect } from 'react';
import { userContext } from '../Components/UserProvider';
import useTitle from '../Hooks/useTitle';

const Blog = () => {

    useEffect(() => {
        window.scroll(0, 0);


    }, [])
    
    let { user } = useContext(userContext)
    useTitle('Blog')
    // console.log(user);
    return (
        <div className='container mx-auto'>
            <h1 className='text-center text-3xl font-semibold my-10 '>Blog page</h1>
            <div className='space-y-5'>
                <div>
                    <h1 className='text-lg font-medium my-2'>
                        What is an access token and refresh token? How do they work and where should we store them on the client-side?
                    </h1>
                    <p>
                        The authentication server issues an access token and a refresh token when a user authenticates and authorizes an application. The access token is a transient credential that enables the user to access particular server resources. It is sent with each request to the server to access protected resources and acts as proof of authentication. The access token has a validity period after which it expires and loses its validity. The refresh token, on the other hand, is a persistent credential that is used to get a new access token when the old one expires. On the client side, the refresh token is safely kept, typically in a secure cookie or local storage. Instead of requiring the user to re-authenticate when the access token expires, the client can send the refresh token to the authentication server to request a new access token. This enhances user convenience while preserving security. In order to prevent unauthorized access and reduce potential security risks, it is crucial to store the refresh token securely.

                    </p>
                </div>
                <div>
                    <h1 className='text-lg font-medium my-2'>
                        Differences SQL and NoSQL databases?
                    </h1>
                    <p>
                        SQL databases are structured, have predefined schemas, and use tables with fixed columns and relationships. They are suitable for applications with complex relationships and well-defined schemas. NoSQL databases are schema-less, provide flexibility in data representation, and use various data models. They are highly scalable and suitable for applications with rapidly changing requirements and large amounts of unstructured or semi-structured data. SQL databases offer powerful querying with SQL, while NoSQL databases focus on horizontal scalability and flexible querying options.
                    </p>
                </div>
                <div>
                    <h1 className='text-lg font-medium my-2'>
                        What is express js? What is Nest JS ?
                    </h1>
                    <p className='my-2'>
                        Express.js is a quick and straightforward Node.js web application framework that enables programmers to create web applications and APIs. It offers a straightforward and neutral approach, giving developers the freedom to organize their applications however they see fit. Express.js focuses on routing, middleware, and request/response handling, offering the crucial elements required to effectively build web applications.


                    </p>
                    <p>
                        On the other hand, Nest.js is a strong and scalable framework for creating Node.js server-side applications. It is constructed on top of Express.js and incorporates a number of Angular features and design patterns, making it very extensible and modular. To build maintainable and scalable applications, Nest.js advocates the use of decorators, dependency injection, and a layered architecture. Additionally, it has built-in support for functions like dependency injection, routing, and validation, giving developers a solid base on which to build enterprise-level applications.
                    </p>
                </div>
                <div>
                    <h1 className='text-lg font-medium my-2'>
                        What is MongoDB aggregate and how does it works?
                    </h1>
                    <p>
                        The aggregate function in MongoDB is used for sophisticated data processing and collection analysis. It allows you to perform operations like filtering, grouping, sorting, projecting, and aggregating data by accepting an array of pipeline stages as input. The pipeline's stages are processed sequentially, with the output of one stage serving as the input for the following. This gives you the ability to combine several operations to perform sophisticated data transformations and queries.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Blog;