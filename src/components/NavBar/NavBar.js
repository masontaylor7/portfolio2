import React, { useState } from 'react';
import './NavBar.css'
import masonimg from '../../images/mason.jpg'

import { BsSunFill } from 'react-icons/bs';
import { GiMoon } from 'react-icons/gi'

const NavBar = () => {
    const [nightMode, setNightMode] = useState(true)

    return (
        <div className={nightMode ? 'nav-bar night nav-night' : 'nav-bar light nav-light'}>
            <div className={nightMode ? 'nav-top night' : 'nav-top light'}>

                <div className='name-wrapper'>
                    <h1 className={nightMode ? 'my-name name-night' : 'my-name name-light'}>Mason Evan Taylor</h1>
                </div>
                <button type='button' onClick={() => setNightMode(!nightMode)} className={nightMode ? 'night-mode-button button-night' : 'night-mode-button button-light'}>{nightMode ? <BsSunFill className='night-mode-icon sun' /> : <GiMoon className='night-mode-icon moon' />}</button>
            </div>
            {/* <div className='nav-bottom'> */}

            <div className='about-block'>
                <div className='about-me-section'>
                    Art comes to us in infinite forms from unlimited corners of the world. My life has been one art project after another, and they have all lead me to my most recent passion: coding. Becoming a software developer has been the dream I never knew I needed, and in dedicating the past year of my life to building on that dream I have been able to open doorways of creativity I didn't know existed. Everyday is a chance to learn something new, and I am very excited to continue my journey into uncovering the endless layers of tech.
                </div>
                <img className='profile-img' src={masonimg} alt='' />
                {/* <div className='profile-image-shadow'></div> */}
            </div>
            {/* </div> */}

        </div>
    );
};

export default NavBar;
