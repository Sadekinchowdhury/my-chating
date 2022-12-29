import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Laout/Main';
import Login from '../Login/Login';
import About from '../Pages/About/About';
import Home from '../Pages/Home/Home';
import Media from '../Pages/Media/Media';
import Message from '../Pages/Message/Message';
import SignUp from '../Signup/Signup';

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/media',
                element: <Media></Media>
            },
            {
                path: '/message',
                element: <Message></Message>
            },
            {
                path: '/profile',
                element: <About></About>
            },
            {
                path: '/',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    }
])


export default Routes;