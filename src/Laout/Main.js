import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Left from '../Left/Left';
import Navbar from '../Nevbar/Nevbar';
import Right from '../Right/Right';


const Main = () => {
    return (
        <section>
            <Navbar></Navbar>
            <div className='grid gap-5 mt-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div className='mx-auto h-full  bg-white shadow-2xl rounded'><Left></Left></div>
                <div className='bg-zinc-100 w-full mx-auto shadow-2xl rounded-2xl'> <Outlet></Outlet> </div>
                <div className='mx-auto  h-full  bg-white shadow-2xl rounded'><Right></Right></div>
            </div>

        </section>
    );
};

export default Main;