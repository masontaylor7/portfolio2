import React from 'react';
import './ContactComp.css'
import resumepdf from '../../PDFs/resume.pdf'
import { SiMinutemailer } from 'react-icons/si';
import { BsLinkedin, BsGithub, BsClipboardCheck } from 'react-icons/bs';
import { SiAngellist } from 'react-icons/si'
import { VscFilePdf } from "react-icons/vsc";


const ContactComp = () => {

    const copy = async () => {
        await navigator.clipboard.writeText('masonevantaylor@gmail.com');
        alert('Email copied to clipboard! :)');
    }


    const iconStyle = {
        width: '35px',
        height: '35px',
        marginLeft: '30px'
    }

    return (
        <div className='contact-section'>
            <div className='contact-title-block'>
                <h1 className='contact-title'>Contact</h1>
                <div><SiMinutemailer className='contact-icon' /></div>
            </div>
            <div className='contact-info-block'>

                <div className='single-contact'>
                    <h3 className='email-text'>Email: masonevantaylor@gmail.com</h3>
                    <BsClipboardCheck onClick={copy} className='clipboard-icon link-button-nav'/>
                </div>

                <div className='links-wrapper'>
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
    );
};

export default ContactComp;
