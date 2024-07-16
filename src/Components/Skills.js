import React from 'react';
import { skills } from '../data';

const Skills = () => {
  return (
    <section className='bg-tertiary py-12'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-7 md:grid-flow-row gap-4 justify-center'>
          {skills.map((skill, index) => (
            <div key={index} className='flex justify-center items-center p-2 bg-tertiary'>
              <img src={skill.image} alt={skill.name} className='w-16 h-16 object-contain' />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;