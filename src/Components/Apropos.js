import React from 'react'
import Image1 from "./../assets/img/about4K.webp";

const Apropos = () => {
  return (
    <section id='à propos' className='section bg-secondary p-8 min-h-[100vh] flex items-center'>
        <div className='flex flex-col xl:flex-row gap-8 w-full h-full items-center'>
            <img className='object-cover h-1/2 xl:h-auto w-full xl:w-1/2 md:mx-auto lg:mx-0 rounded-2xl' src={Image1} alt=''>
            </img>
            <div className='flex flex-col justify-center items-center text-center lg:items-start lg:text-left w-full xl:w-1/2 h-full'>
                <div className='flex flex-col p-4'>
                    <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 relative'>
                        Mon Savoir
                    </h2>
                    <p className='mb-4 text-accent'>
                        Développeur FullStack
                    </p> 
                    <hr className='mb-8 opacity-50'/>
                    <p className='mb-8'>
                    Au cours de ma formation en développement web,
                    j'ai acquis des compétences essentielles en HTML,
                    CSS, JavaScript, Sass et React pour créer des sites web interactifs.
                    J'ai également appris à optimiser les sites pour de meilleures performances et à utiliser Node.js pour le développement back-end.
                    Ces compétences me permettent de livrer des solutions web complètes et performantes.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Apropos