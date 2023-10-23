import React, { useState } from 'react'
import { FaBars, FaUserCircle } from 'react-icons/fa'

const Navbar = (props) => {
    return (
        <div className='flex justify-between bg-slate-100 w-full h-[77px] border-b border-slate-800'>
            <div className='flex flex-row items-center font-semibold'>
                <div onClick={() => props.ubahSide()} className='mx-7 text-2xl cursor-pointer'>
                    <FaBars />
                </div>
                <div className={`hidden md:block mx-5 text-lg cursor-pointer`}>
                    <h3>HOME</h3>
                </div>
                <div className='hidden md:block mx-5 text-lg cursor-pointer'>
                    <h3>PROFILE</h3>
                </div>
            </div>
            <div className='flex flex-row items-center mx-5  font-semibold'>
                <h3 className='mx-2 text-lg'>Dodi Ardiansyah</h3>
                <div className='mx-2 text-3xl bg-slate-500 rounded-full border-none text-slate-300'>
                    <FaUserCircle />
                </div>
            </div>

        </div>

    )
}

export default Navbar