import React from 'react'
import { AiOutlineLineChart } from 'react-icons/ai'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import troli from '../assets/icon/troli.png'
import sell from '../assets/icon/sell.png'
import supplier from '../assets/icon/supplier.png'
import stock from '../assets/icon/stock.png'

const Dashboard = () => {

    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];

    return (
        <div className=' bg-gray-300 h-full w-full'>
            <h1 className='text-2xl font-bold m-5'>DASHBOARD</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 m-3'>
                <div className='bg-red-400 m-3 p-2 grid grid-cols-2 rounded-lg '>
                    <div className='pt-5 me-5'>
                        <img src={troli} className='w-[60px] h-[68px]' />
                    </div>
                    <div className='flex flex-col justify-center text-center -ms-5 font-semibold'>
                        <span>Total Pengiriman</span>
                        <span className='font-bold'>100</span>
                    </div>
                </div>
                <div className='bg-green-500 m-3 p-2 grid grid-cols-2 rounded-lg'>
                    <div className='pt-5 me-5'>
                        <img src={supplier} className='w-[60px] h-[68px]' />
                    </div>
                    <div className='flex flex-col justify-center text-center -ms-5 font-semibold'>
                        <span>Data Pengirim</span>
                        <span className='font-bold'>79</span>
                    </div>
                </div>
                <div className='bg-blue-500 m-3 p-2 grid grid-cols-2 rounded-lg'>
                    <div className='pt-5 me-5'>
                        <img src={stock} className='w-[60px] h-[68px]' />
                    </div>
                    <div className='flex flex-col justify-center text-center -ms-5 font-semibold'>
                        <span>Pengiriman Dalam Proses</span>
                        <span className='font-bold'>80</span>
                    </div>
                </div>
                <div className='bg-yellow-500 m-3 p-2 grid grid-cols-2 rounded-lg '>
                    <div className='pt-5  me-5'>
                        <img src={sell} className='w-[60px] h-[68px]' />
                    </div>
                    <div className='flex flex-col justify-center text-center -ms-5 font-semibold'>
                        <span>Pengiriman Selesai</span>
                        <span className='font-bold'>60</span>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 mt-5'>
                <div className='bg-blue-400 p-2 m-5 rounded-lg'>
                    <div className='flex items-center'>
                        <AiOutlineLineChart className='w-14 h-14' />
                        <h3 className='text-lg font-semibold text-center mt-1'>
                            STATISTIK PENGIRIMAN PER BULAN PADA TAHUN 2023
                        </h3>
                    </div>
                    <div className='mt-5 w-full h-[240px]'>
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart
                                width={500}
                                height={300}
                                data={data}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="pv" stroke="#fff" activeDot={{ r: 8 }} />
                                <Line type="monotone" dataKey="uv" stroke="red" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className='bg-green-500 p-2 m-5 rounded-lg'>
                    <div className='flex items-center'>
                        <AiOutlineLineChart className='w-14 h-14' />
                        <h3 className='text-lg font-semibold text-center mt-1'>
                            STATISTIK PENGIRIMAN PER BULAN PADA TAHUN 2023
                        </h3>
                    </div>
                    <div className='mt-5 w-full h-[240px]'>
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart
                                width={500}
                                height={300}
                                data={data}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="pv" stroke="#fff" activeDot={{ r: 8 }} />
                                <Line type="monotone" dataKey="uv" stroke="red" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard