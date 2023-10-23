import React, { useState } from 'react'
import { FaDropbox, FaHome, FaPlus, FaAngleRight, FaAngleDown, FaGenderless, FaFileAlt } from 'react-icons/fa'

const Sidebar = (props) => {
    const [drop, setDrop] = useState(true)

    return (
        <div className={`flex flex-col bg-gray-700 h-full ${props.getBar ? 'w-24' : 'w-60'}`}>
            <div className=' my-5 flex justify-center cursor-pointer'>
                <div className='bg-gray-300 p-1 me-2 rounded-full'>
                    <FaDropbox className='text-xl' />
                </div>
                <h2 className={`text-white text-xl font-bold my-auto ${props.getHidden}`}>AUTODIMESI</h2>
            </div>
            <hr />
            <div className='flex flex-col mt-5 text-white font-semibold -ms-2'>
                <div className='flex items-center mt-2 p-2 px-9 cursor-pointer'>
                    <FaHome className='text-2xl'/>
                    <h3 className={`ms-3 ${props.getHidden}`}>DASHBOARD</h3>
                </div>
                <div onClick={() => { setDrop(!drop) }} className='flex items-center px-9 mt-2 p-2 cursor-pointer'>
                    <FaPlus className='text-2xl'/>
                    <h3 className={`ms-3 ${props.getHidden}`}>PENGIRIMAN</h3>
                    <div className={`flex relative -right-6 -ms-4 ${props.getHidden}`}>
                        {drop ? <FaAngleRight className='text-2xl'/> : <FaAngleDown className='text-2xl'/>}

                    </div>
                </div>{!drop ?
                <div className='flex flex-col ps-[60px] pe-2 items-start font-normal'>
                <ul>
                    <div className='flex items-center cursor-pointer mt-2'>
                        <FaGenderless className='text-xl' />
                        <li className={`my-2  ${props.getHidden}`}> Data Pengiriman</li>
                    </div>
                    <div className='flex items-center cursor-pointer mt-2'>
                        <FaGenderless className='text-xl' />
                        <li className={`my-2  ${props.getHidden}`}>Invoice</li>
                    </div>
                </ul>
            </div> : ''}

            <div className='flex items-center px-9 mt-2 p-2 cursor-pointer'>
                <FaFileAlt className='text-2xl'/>
                <h3 className={`ms-3 ${props.getHidden}`}>LAPORAN</h3>
            </div>

        </div>

        </div >
    )
}

export default Sidebar