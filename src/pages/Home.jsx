import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Dashboard from '../components/Dashboard'

const Home = () => {

    const [getBar, setBar] = useState(false)
    const [getHidden, setHidden] = useState("")
    // const [getLebarSide, setLebarSide] = useState("")

    const ubahSide = () => {
        setBar(!getBar)

        if (getBar) {
            setHidden("")
            // setLebarSide("")
        } else {
            setHidden("hidden")
            // setLebarSide("w-20")
        }

        console.log(getBar)
        console.log(getHidden)
        // console.log(getLebarSide)
    }

    return (
        <div className='flex'>
            <div className='flex'>
                <Sidebar getHidden={getHidden} getBar={getBar} />
                
            </div>
            <div className='flex flex-col w-full'>
                <Navbar ubahSide={ubahSide} />
                <Dashboard />
            </div>
        </div>
    )
}

export default Home