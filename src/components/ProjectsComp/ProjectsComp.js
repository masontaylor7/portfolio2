import React from 'react';
import './ProjectsComp.css'
import { GoProject } from 'react-icons/go';
import Slider from '../Slider/Slider';


import alacarteimg from '../../images/alacarte-browse.jpg'
import dropdownimg from '../../images/dropdown.jpg'
import newrecipeimg from '../../images/new-recipe.jpg'
import indirecipeimg from '../../images/individual-recipe.jpg'
import updaterecipeimg from '../../images/recipe-update.jpg'


import fitnessimg from '../../images/fitness-overflow-post.jpg'
import flixtagramimg from '../../images/login.JPG'

const ProjectsComp = () => {
    const alacarteSlides = [
        alacarteimg,
        newrecipeimg,
        indirecipeimg,
        updaterecipeimg
    ]

    const flixtagramSlides = [
        flixtagramimg
    ]

    const fitnessSlides = [
        fitnessimg
    ]

    const containerStyles = {
        border: '1px solid black',
        maxWidth: '800px',
        maxHeight: '400px',
    }

    return (
        <div className='project-section'>
            <div className='project-title-block'>
                <h1 className='projects-title'>Projects</h1>
                <div><GoProject className='icon' /></div>
            </div>
            <div className='projects-block'>


                <div className='project-wrapper'>
                    <div style={containerStyles}>
                        <Slider slides={alacarteSlides} />
                    </div>
                    <div className='project-info'>
                        <h1 className='project-name'>Alacarte</h1>
                        <div className='project-techs'>[ React.js, Redux, Python, Flask, SQLAlchemy, AWS, HTML5, CSS3 ]</div>
                    </div>
                </div>


                <div className='project-wrapper'>
                    <div style={containerStyles}>
                        <Slider slides={flixtagramSlides} />
                    </div>
                    <div className='project-info'>
                        <h1 className='project-name'>Flixtagram</h1>
                        <div className='project-techs'>[ React.js, Redux, Python, Flask, PostgreSQL, AWS, HTML5, CSS3 ]</div>
                    </div>
                </div>

                <div className='project-wrapper'>
                    <div style={containerStyles}>
                        <Slider slides={fitnessSlides} />
                    </div>
                    <div className='project-info'>
                        <h1 className='project-name'>Fitness-Overflow</h1>
                        <div className='project-techs'>[ Javascript, Express, PostgreSQL, HTML, CSS3, Pug ]</div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProjectsComp;
