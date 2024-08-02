import React from 'react';
import { skills } from '../data';

const Skills = () => {
  return (
    <section className='bg-tertiary py-12 min-h-[50vh] flex items-center'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 w-full'>
          {skills.map((skill, index) => (
            <div key={index} className='flex justify-center items-center p-2 bg-tertiary w-full'>
              <img src={skill.image} alt={skill.name} className='w-16 h-16 object-contain' />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
