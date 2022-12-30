import { secondary } from 'daisyui/src/colors/colorNames';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaSchool, FaAddressBook } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import Modal from './Modal/Modal';
import { AuthContext } from '../../Context/AuthProvider';




const About = () => {
    const { user } = useContext(AuthContext)
    const { about, setAbout } = useState(null)
    return (
        <section>
            <div className='items-center justify-center text-center mt-4 '>
                <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://placeimg.com/192/192/people" alt='' />
                    </div>
                </div>

            </div>


            <div className='text-start p-10 '>

                <div className='flex p-3 items-center font-semibold bg-slate-300 shadow-xl rounded mb-2'>
                    <div className='mr-3 '>
                        <FaUser></FaUser>
                    </div>
                    <div className=' '>
                        <span>{user?.displayName}</span>
                    </div>
                </div>
                <div className='flex p-3 items-center font-semibold bg-slate-300 shadow-xl rounded mb-2'>
                    <div className='mr-3 '>
                        <FaSchool></FaSchool>
                    </div>
                    <div className=' '>
                        <span>Natiional university</span>
                    </div>
                </div>
                <div className='flex p-3 items-center font-semibold bg-slate-300 shadow-xl rounded mb-2'>
                    <div className='mr-3 '>
                        <FaAddressBook></FaAddressBook>
                    </div>
                    <div className=' '>
                        <span>Sylhet</span>
                    </div>
                </div>
                <div className='flex p-3 items-center font-semibold bg-slate-300 shadow-xl rounded mb-2'>
                    <div className='mr-3 '>
                        <AiOutlineMail></AiOutlineMail>
                    </div>
                    <div className=' '>
                        <span>Sadekin</span>
                    </div>
                </div>

            </div>
            <div className='mb-4 ml-3 justify-end place-items-end'>
                <label htmlFor="edit" className="btn btn-info btn-sm">Edit



                </label>
                <div>
                    <Modal></Modal>
                </div>

            </div>

        </section >
    );
};

export default About;