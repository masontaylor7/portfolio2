import React from 'react';
import './SkillsComp.css'
import { GiTechnoHeart } from 'react-icons/gi';
import { SiRedux, SiReact, SiJavascript, SiPython, SiNodedotjs, SiFlask, SiSequelize, SiAmazonaws, SiPostgresql, SiHtml5, SiCss3, SiGithub, SiHeroku, SiPug } from 'react-icons/si';


const SkillsComp = () => {
    const techStyle = {
        width: '40px',
        height: '40px',
        marginBottom: '15px',
    }

    return (
        <div className='skills-section'>
            <div className='skills-title-block'>
                <h1 className='skills-title'>Skills & Tech</h1>
                <div><GiTechnoHeart className='skills-icon' /></div>
            </div>

            <div className='tech-block'>
                <div className='tech-wrapper'>
                    <div className='solo-tech-slide tc1'>
                        <SiReact style={techStyle} />
                        <div className='tech-text'>React</div>
                    </div>

                    <div className='solo-tech-slide tc2'>
                        <SiRedux style={techStyle} />
                        <div className='tech-text'>Redux</div>
                    </div>

                    <div className='solo-tech-slide tc3'>
                        <SiJavascript style={techStyle} />
                        <div className='tech-text'>Javascript</div>
                    </div>

                    <div className='solo-tech-slide tc4'>
                        <SiPython style={techStyle} />
                        <div className='tech-text'>Python</div>
                    </div>

                    <div className='solo-tech-slide tc5'>
                        <SiAmazonaws style={techStyle} />
                        <div className='tech-text'>Amazon Web Services</div>
                    </div>

                    <div className='solo-tech-slide tc6'>
                        <SiFlask style={techStyle} />
                        <div className='tech-text'>Flask</div>
                    </div>

                    <div className='solo-tech-slide tc7'>
                        <SiSequelize style={techStyle} />
                        <div className='tech-text'>Sequelize</div>
                    </div>

                    <div className='solo-tech-slide tc8 '>
                        <SiPostgresql style={techStyle} />
                        <div className='tech-text'>PostgreSQL</div>
                    </div>

                    <div className='solo-tech-slide tc9 '>
                        <SiHtml5 style={techStyle} />
                        <div className='tech-text'>HTML5</div>
                    </div>

                    <div className='solo-tech-slide tc10 '>
                        <SiCss3 style={techStyle} />
                        <div className='tech-text'>CSS</div>
                    </div>

                    <div className='solo-tech-slide tc11 '>
                        <SiNodedotjs style={techStyle} />
                        <div className='tech-text'>Node.js</div>
                    </div>

                    <div className='solo-tech-slide tc12 '>
                        <SiGithub style={techStyle} />
                        <div className='tech-text'>Git</div>
                    </div>

                    <div className='solo-tech-slide tc13 '>
                        <SiHeroku style={techStyle} />
                        <div className='tech-text'>Heroku</div>
                    </div>

                    <div className='solo-tech-slide tc14 '>
                        <SiPug style={techStyle} />
                        <div className='tech-text'>Pug</div>
                    </div>

                </div>

            </div>

            <div className='skills-block'>

            </div>

        </div>
    );
};

export default SkillsComp;
