import React from 'react';
import './ProjectsComp.css'
import { GoProject } from 'react-icons/go';
import { BsCloudArrowUp, BsGithub } from 'react-icons/bs';
import Slider from '../Slider/Slider';


import alacarteimg from '../../images/alacarte-browse.jpg'
import newrecipeimg from '../../images/new-recipe.jpg'
import indirecipeimg from '../../images/individual-recipe.jpg'
import updaterecipeimg from '../../images/recipe-update.jpg'


import flixtagramimg from '../../images/login.JPG'
import homepageflix from '../../images/homepage-flix.jpg'
import profileflix from '../../images/profile-flix.jpg'
import uploadflix from '../../images/upload-flix.jpg'


import fitnesspostimg from '../../images/fitness-overflow-post.jpg'
import fitnesssplashimg from '../../images/fitness-splash.jpg'
import fitnessprofileimg from '../../images/fitness-profile.jpg'
import fitnessnewquestionimg from '../../images/fitness-new-question.jpg'



const ProjectsComp = () => {
    const alacarteSlides = [
        alacarteimg,
        indirecipeimg,
        updaterecipeimg,
        newrecipeimg,
    ]

    const flixtagramSlides = [
        flixtagramimg,
        homepageflix,
        profileflix,
        uploadflix
    ]

    const fitnessSlides = [
        fitnesspostimg,
        fitnesssplashimg,
        fitnessprofileimg,
        fitnessnewquestionimg
    ]

    const containerStyles = {
        border: '1px solid black',
        width: '750px',
        height: '395px',
    }

    const iconStyle = {
        width: '25px',
        height: '25px',
        marginLeft: '8px',
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
                    <div className='project-right-side'>
                        <div className='project-info'>
                            <h1 className='project-name'>Alacarte</h1>
                            <h3 className='project-techs'>[ React.js, Redux, Python, Flask, SQLAlchemy, AWS, HTML5, CSS3 ]</h3>
                            <div className='project-description'>Alacarte is a food lovers dream. Jam-packed with delicious recipes and new inspirations, you'll find your new favorites in no time! Users are able to add their own recipes to Alacarte, and save their favorite recipes to personal and customizable collections. </div>
                        </div>
                        <div className='link-block'>
                            <a className='link-button' target="_blank" rel="noreferrer" href='https://github.com/masontaylor7/Alacarte'><h3>GitHub</h3> <BsGithub className='github-project-icon' style={iconStyle} /></a>
                            <a className='link-button' target="_blank" rel="noreferrer" href='https://ala-carte.herokuapp.com/'><h3>Live Link</h3> <BsCloudArrowUp style={iconStyle} /></a>
                        </div>
                    </div>
                </div>


                <div className='project-wrapper'>
                    <div style={containerStyles}>
                        <Slider slides={flixtagramSlides} />
                    </div>
                    <div className='project-right-side'>
                        <div className='project-info'>
                            <h1 className='project-name'>Flixtagram</h1>
                            <h3 className='project-techs'>[ React.js, Redux, Python, Flask, PostgreSQL, AWS, HTML5, CSS3 ]</h3>
                            <div className='project-description'>Flixtagram is a clone of the great Instagram app. While taking some creative differences, the familiar layout makes it comfortable for users to share and like posts, granting users the ability to also follow other users and keep up with their lives. </div>
                        </div>
                        <div className='link-block'>
                            <a className='link-button' target="_blank" rel="noreferrer" href='https://github.com/jonathancchsu/fitness-overflow'><h3>GitHub</h3> <BsGithub className='github-project-icon' style={iconStyle} /></a>
                            <a className='link-button' target="_blank" rel="noreferrer" href='https://fitnessoverflow.herokuapp.com/'><h3>Live Link</h3> <BsCloudArrowUp style={iconStyle} /></a>
                        </div>
                    </div>
                </div>


                <div className='project-wrapper'>
                    <div style={containerStyles}>
                        <Slider slides={fitnessSlides} />
                    </div>
                    <div className='project-right-side'>
                        <div className='project-info'>
                            <h1 className='project-name'>Fitness-Overflow</h1>
                            <h3 className='project-techs'>[ Javascript, Express, PostgreSQL, HTML, CSS3, Pug ]</h3>
                            <div className='project-description'>Fitness-Overflow is a platform built to provide health nuts and gym enthusiests with user submitted answers to all of their personal health and lifetsyle questions.</div>
                        </div>
                        <div className='link-block'>
                            <a className='link-button' target="_blank" rel="noreferrer" href='https://github.com/jonathancchsu/fitness-overflow'><h3>GitHub</h3> <BsGithub className='github-project-icon' style={iconStyle} /></a>
                            <a className='link-button' target="_blank" rel="noreferrer" href='https://fitnessoverflow.herokuapp.com/'><h3>Live Link</h3> <BsCloudArrowUp style={iconStyle} /></a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProjectsComp;
