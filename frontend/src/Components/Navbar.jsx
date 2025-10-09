import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { ShopContext } from '../Context/shopContext';


const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const { setShowSearch, getCartCount, token, setToken, setCartItems } = useContext(ShopContext);

    const navigate = useNavigate();
    const logout = async () => {
        navigate('/login')
        localStorage.removeItem('token')
        setToken('')
        setCartItems({})
    }

    return (
        <div className='flex items-center justify-between py-5 font-medium'>

            <img onClick={() => setVisible(true)} src={assets.menu_icon} alt="menu" className='w-4 sm:hidden cursor-pointer' />
            <Link to={'/'} className='hover:pointer'>
                <img src={assets.logo} className='w-24' alt="Let's Shop" />
            </Link>


            <ul className='hidden sm:flex gap-5 text-sm text-blue-700'>
                <NavLink to={'/'} className='flex flex-col items-center gap-1'>
                    <p>HOME</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>

                {/* <NavLink to={'/collections'} className={({isActive}) => isActive? "underline flex  flex-col items-center gap-1":""}> */}
                <NavLink to={'/collection'} className='flex flex-col items-center gap-1'>
                    <p>COLLECTION</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>

                <NavLink to={'/about'} className='flex flex-col items-center gap-1'>
                    <p>ABOUT</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>

                <NavLink to={'/contact'} className='flex flex-col items-center gap-1'>
                    <p>CONTACT</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
            </ul>

            <div className='flex items-center gap-6'>
                <img onClick={() => setShowSearch(true)} className='w-3.5 cursor-pointer' src={assets.search_icon} alt="search_icon" />

                {/* <div className='relative group '>
                <img className='w-3.5 cursor-pointer' src={assets.profile_icon} alt="profile_icon" />
                <div className="hidden group-hover:black absolute dropdown-menu right-0 pt-4 ">
                    <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-400 text-gray-100 rounded'>
                        <p className='cursor-pointer hover:text-black'> My Profile</p>
                        <p className='cursor-pointer hover:text-black'>Orders</p>
                        <p className='cursor-pointer hover:text-black'>Loguot</p>
                    </div>
                </div>
            </div> */}
                <div className="relative group">

                    {/* --------Dropown Menu--------------------*/}
                    <img onClick={() => token ? null : navigate('/login')} className='w-3.5 cursor-pointer' src={assets.profile_icon} alt="profile_icon" />

                    {token &&
                        <div className="hidden group-hover:block absolute right-0 pt-3">
                            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-200 text-gray-500 rounded'>
                                <p className='cursor-pointer hover:text-black'> My Profile</p>
                                <p onClick={()=>navigate('/orders')} className='cursor-pointer hover:text-black'>Orders</p>
                                <p onClick={logout} className='cursor-pointer hover:text-black'>Loguot</p>
                            </div>
                        </div>

                    }

                </div>
                <Link to={"/cart"} className='relative'>
                    <img src={assets.cart_icon} alt="cart" className='w-4 min-w-4 cursor-pointer' />
                    <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[10px]'>{getCartCount()}</p>
                </Link>



            </div>
            {/* Sidebar menu for small screen*/}
            <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
                <div className='flex flex-col text-gray-600'>
                    <div onClick={() => { setVisible(false) }} className="flex items-center gap-4 p-3 cursor-pointer">
                        <img className='h-4 rotate-180 ' src={assets.dropdown_icon} alt="dropdown-icon" />
                        <p className='text-xm'>Back</p>
                    </div>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/'>Home</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/collection'>Collection</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/about'>About</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/contact'>Contact</NavLink>

                </div>
            </div>
        </div>
    )
}

export default Navbar


// className={({isActive}) => isActive? "underline flex flex-col items-center gap-1":""}