import { React, useContext } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import { FaDashcube, FaSignOutAlt, FaUser, FaFacebookMessenger, FaHome } from 'react-icons/fa'
import { } from 'react-icons/bi'
import { } from 'react-icons/ai'


const Navbar = () => {
    const navigate = useNavigate()
    const { user, LogOut } = useContext(AuthContext)
    const handlLogout = () => {
        LogOut()
            .then(() => { })
        navigate('/')
            .catch(error => console.log(error))
    }


    const menue = <>
        {
            !user?.email ? <><Link to='/'>Login</Link></>
                : <><Link className='"tooltip" data-tip="hello' to='/home'>
                    <FaHome></FaHome>

                </Link>
                    <Link title='Media' to='/media'><FaDashcube></FaDashcube> </Link>
                    <Link to='/message'><FaFacebookMessenger></FaFacebookMessenger> </Link>
                    <Link to='/profile'><FaUser></FaUser></Link>
                    <Link onClick={handlLogout}><FaSignOutAlt></FaSignOutAlt> </Link>
                </>
        }

    </>


    return (
        <div className="bg-white shadow-violet-800 bordered shadow-2xl">
            <div className="text-center justify-center items-center">
                <ul className="menu menu-horizontal p-0">
                    <li>{menue}</li>
                </ul>
            </div>


        </div>
    );
};

export default Navbar;