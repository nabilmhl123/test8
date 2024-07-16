import React from 'react'

const Apropos = () => {
  return (
    <section id='à propos' className='section
    bg-secondary'>
        <div className='flex flex-col xl:flex-row
        gap-24'>
            {/* <img className='object-cover h-full w-[566px]
            md:mx-auto lg:mx-0 rounded-2x1' src={}
            alt=''>
            </img> */}
            <div className='flex flex-col items-center
            text-center lg:items-start lg:text-left'>
                <div className='flex flex-col'>
                    <h2 className='text-3xl lg:text-4x1
                    font-medium lg:font-extrabold mb-3
                    before:content-about relative
                    before:absolute before::opacity-40
                    before:-top-[2rem] before:hidden
                    before:lg:block'> Mon Savoir
                    </h2>
                    <p className='mb-4 text-accent'>
                        Développeur FullStack
                    </p> 
                    <hr className='mb-8 opacity-5'/>
                    <p className='mb-8'>
                        Dévoloppeur en construction
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Apropos
