import React from 'react';
import './NavBar.css'
import masonimg from '../../images/mason.jpg'
import resumepdf from '../../PDFs/resume.pdf'

import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { SiAngellist } from 'react-icons/si'
import { VscFilePdf } from "react-icons/vsc";

const NavBar = () => {

    const iconStyle = {
        width: '35px',
        height: '35px',
        marginLeft: '30px'
    }

    return (
        <div className='nav-bar light'>
            <div className='nav-top light'>

                <div className='name-wrapper'>
                    <h1 className='my-name'>Mason Evan Taylor</h1>
                    <div className='nav-contact-links'>

                        <h2 className='title'>Software Engineer | Full Stack Developer</h2>

                        <div className='links-block'>
                            <a className='link-button-nav' target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/mtaylor77/'><BsLinkedin style={iconStyle} /></a>

                            <a className='link-button-nav' target="_blank" rel="noreferrer" href='https://github.com/masontaylor7'><BsGithub style={iconStyle} /></a>

                            <a className='link-button-nav' target="_blank" rel="noreferrer" href='https://ala-carte.herokuapp.com/'><SiAngellist style={iconStyle} /></a>

                            <div className='resume-popup'>
                                <a className='link-button-nav resume-icon' target="_blank" rel="noreferrer" href={resumepdf}>
                                    <VscFilePdf style={iconStyle} />
                                    <h3 className='resume-text'>Resume</h3>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className='about-block'>
                <div className='text-block'>
                    <h2 className='welcome-text'>Welcome!</h2>
                    <div className='about-me-section'>
                        Art comes to us in infinite forms from unlimited corners of the world. My life has been one art project after another, and they have all lead me to my most recent passion: coding. Becoming a software developer has been the dream I never knew I needed, and in dedicating the past year of my life to building on that dream I have been able to open doorways of creativity I didn't know existed. Everyday is a chance to learn something new, and I am very excited to continue my journey into uncovering the endless layers of tech.
                    </div>
                </div>
                <img className='profile-img' src={masonimg} alt='' />
                {/* <div className='profile-image-shadow'></div> */}
            </div>
        </div>
    );
};

export default NavBar;
