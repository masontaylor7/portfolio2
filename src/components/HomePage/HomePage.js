import React from 'react';
import './HomePage.css'
import ProjectsComp from '../ProjectsComp/ProjectsComp';
import SkillsComp from '../SkillsComp/SkillsComp';

const HomePage = () => {
    return (
        <div className='home-page'>
            <SkillsComp />
            <ProjectsComp />
        </div>
    );
};

export default HomePage;
