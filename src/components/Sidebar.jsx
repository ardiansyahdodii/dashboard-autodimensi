import React, { useState } from 'react'
import { FaDropbox, FaHome, FaPlus, FaAngleRight, FaAngleDown, FaGenderless } from 'react-icons/fa'

const Sidebar = () => {
    const [drop, setDrop] = useState(true)

    return (
        <div className='flex flex-col bg-gray-700 w-56 h-[100vh]'>
            <div className=' my-5 flex justify-center cursor-pointer'>
                <div className='bg-gray-300 p-1 me-2 rounded-full'>
                    <FaDropbox className='text-xl' />
                </div>
                <h2 className='text-white text-xl font-bold my-auto '>AUTODIMESI</h2>
            </div>
            <hr />
            <div className='flex flex-col mt-5 text-white font-semibold '>
                <div className='flex items-center mt-2 p-2 px-9 cursor-pointer '>
                    <FaHome />
                    <h3 className='ms-3'>DASHBOARD</h3>
                </div>
                <div onClick={() => { setDrop(!drop) }} className='flex items-center px-9 mt-2 p-2 cursor-pointer'>
                    <FaPlus />
                    <h3 className='ms-3'>PENGIRIMAN</h3>
                    <div className='flex relative -right-10 -ms-4'>
                        {drop ? <FaAngleRight /> : <FaAngleDown />}

                    </div>
                </div>{!drop ?
                <div className='flex flex-col ps-[60px] pe-2 items-start font-normal'>
                <ul>
                    <div className='flex items-center '>
                        <FaGenderless className='text-lg' />
                        <li className='my-2 cursor-pointer '> Data Pengiriman</li>
                    </div>
                    <div className='flex items-center '>
                        <FaGenderless className='text-lg' />
                        <li className='my-2 cursor-pointer '>Invoice</li>
                    </div>
                </ul>
            </div> : ''}

            <div className='flex items-center px-9 mt-2 p-2 cursor-pointer'>
                <FaHome />
                <h3 className='ms-3'>LAPORAN</h3>
            </div>

        </div>

        </div >
    )
}

export default Sidebar