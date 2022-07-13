import React, { useState } from 'react';
import './NavBar.css'
import masonimg from '../../images/mason.jpg'

import { BsSunFill } from 'react-icons/bs';
import { GiMoon } from 'react-icons/gi'

const NavBar = () => {

    return (
        <div className='nav-bar light'>
            <div className='nav-top light'>

                <div className='name-wrapper'>
                    <h1 className='my-name'>Mason Evan Taylor</h1>
                    <h2 className='title'>Software Engineer</h2>
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
