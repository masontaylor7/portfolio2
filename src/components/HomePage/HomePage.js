import React from 'react';
import './HomePage.css'
import ProjectsComp from '../ProjectsComp/ProjectsComp';
import SkillsComp from '../SkillsComp/SkillsComp';
import ContactComp from '../ContactComp/ContactComp';

const HomePage = () => {
    return (
        <div className='home-page'>
            <SkillsComp />
            <ProjectsComp />
            <ContactComp />
        </div>
    );
};

export default HomePage;
