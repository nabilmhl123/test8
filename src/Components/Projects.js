import { useEffect, useState } from "react";
import React from 'react';
import { projectsData, projectsNav } from "../data";

const Projects = () => {
    const [item, setItem] = useState({ name: 'all' });
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);

    useEffect(() => {
        if (item.name === 'all') {
            setProjects(projectsData);
        } else {
            const newProjects = projectsData.filter((project) => {
                return project.category.toLowerCase() === item.name;
            });
            setProjects(newProjects);
        }
    }, [item]);

    const handleClick = (e, index) => {
        setItem({ name: e.target.textContent.toLowerCase() });
        setActive(index);
    };

    return (
        <div className="container mx-auto py-12">
            <nav className="mb-12 max-w-xl mx-auto">
                <ul className="flex flex-col md:flex-row justify-evenly items-center text-white">
                    {projectsNav.map((navItem, index) => (
                        <li
                            key={index}
                            onClick={(e) => handleClick(e, index)}
                            className={`${active === index ? 'active' : ''} cursor-pointer capitalize m-4`}
                        >
                            {navItem.name}
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                {projects.map((project, index) => (
                    <div key={index} className="project-card max-w-sm rounded-2xl overflow-hidden shadow-lg">
                        <img src={project.image} alt={project.name} className="w-full h-auto rounded-2xl" />
                        <div className="project-info p-4">
                            <h3 className="text-xl font-semibold">{project.name}</h3>
                            <p className="text-gray-400">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;