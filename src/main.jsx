import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './Pages/HomePage.jsx';
import Home from './Layout/Home.jsx';
import Login from './Pages/Login.jsx';
import SignUp from './Pages/SignUp.jsx';
import Blog from './Pages/Blog.jsx';
import UserProvider from './Components/UserProvider.jsx';
import PrivateRoute from './Components/PrivateRoute.jsx';
import AddToy from './Pages/AddToy.jsx';
import AllToys from './Pages/AllToys.jsx';
import ToyDetails from './Pages/ToyDetails.jsx';
import MyToys from './Pages/MyToys.jsx';
import UpdateToy from './Pages/UpdateToy.jsx';
import NotFound from './Pages/NotFound.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,

    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/blog",
        element: <PrivateRoute><Blog></Blog></PrivateRoute>,
      },
      {
        path: "/addToy",
        element: <PrivateRoute><AddToy></AddToy></PrivateRoute>,
      },
      {
        path: "/allToys",
        element: <AllToys></AllToys>,
        loader: ()=> fetch('https://assignment-11-back-end.vercel.app/toys')
      },
      {
        path: "/toyDetails/:id",
        element:<PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
        loader: ({params})=>fetch(`https://assignment-11-back-end.vercel.app/toys/${params.id}`)
        
      },
      {
        path: "/myToys",
        element:<PrivateRoute><MyToys></MyToys></PrivateRoute>,
        
        
      },
      {
        path: "/updateToy/:id",
        element:<PrivateRoute><UpdateToy></UpdateToy></PrivateRoute>,
        loader: ({params})=>fetch(`https://assignment-11-back-end.vercel.app/toys/${params.id}`)
        
        
      },
     
    ],
  },
  {
    path: '/*',
    element: <NotFound></NotFound>
  }
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>,
)
