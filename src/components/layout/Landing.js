import React from 'react'
import '../../App.css'
import './Landing.css'

const Landing = () => {
    return (

        // <div className='bg-gray-200 h-screen flex flex-col justify-center items-center'>

        //     <h1 className="2xl:text-9xl xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl text-4xl 
        //     font-black tracking-wider mb-2">CITY CLIMB</h1>

        //     <h3 className="2xl:text-7xl xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-xl     
        //     font-extralight">Climbers Companion</h3>
            
        // </div>

        <div className='hero-container'>
            <video src="/videos/video-2.mp4" autoPlay loop muted />

            <h1> CITY CLIMB </h1>
            <p> Climbers Companion </p>

        </div>
    )
}

export default Landing
