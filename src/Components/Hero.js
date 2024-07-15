import React from 'react'
import Nabil from '../assets/img/logo2.svg';


const Hero = () => {
  return (
    <section id='home' className='lg:h-[85vh] flex
    items-center bg-primary lg;bg-cover lg:bg-center
    lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'>
        <div className='container mx-auto'>hero
        <div className='flex items-center h-full
        pt-8'>
            <div className='flex-1 flex flex-col
            items-center lg:items-start'>
                <p className='text-lg text-accent mb-
                [22px]'>Nabil Mahel</p>
                <h1 className='text-4x1 leading-[44px]
                md:text-5lx md:leading-tight lg:text-7xl
                lg:leading-[1.2] font-bold md:tracking-
                [-2px]'>
                    Web Developpeur
                </h1>
            </div>

            <div className='hidden lg:flex flex-1
            justify-end h-full'>
                <img src={Nabil} alt='' />
            </div>
        </div>
        </div>
        
    </section>
  )
}

export default Hero
