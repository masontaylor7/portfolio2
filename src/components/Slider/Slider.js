import React, { useState } from 'react';
import './Slider.css'
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi'
import { BsDot } from 'react-icons/bs'


const Slider = ({ slides }) => {
    const [currIndex, setCurrIndex] = useState(0)

    const sliderStyles = {
        height: '100%',
        position: 'relative'
    }

    const slideStyles = {
        width: '100%',
        height: '100%',
        backgroundPosition: 'center',
        objectFit: 'cover',
        backgroundImage: `url(${slides[currIndex].url})`,
    }

    const leftArrowStyles = {
        position: 'absolute',
        left: '30%',
        fontSize: '30px',
        zIndex: '2',
        cursor: 'pointer'
    }

    const rightArrowStyles = {
        position: 'absolute',
        right: '30%',
        fontSize: '30px',
        zIndex: '2',
        cursor: 'pointer'
    }

    const dotStyles = {
        fontSize: '30px',
        cursor: 'pointer',
        padding: '0',
        borderRadius: '25%',
        background: 'none'
    }

    const dotBlock = {
        width: '200px',
        display: 'flex',
        justifyContent: 'space-evenly'
    }

    const arrowBlock = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',

    }

    const goToPrevious = () => {
        const isFirstSlide = currIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currIndex - 1
        setCurrIndex(newIndex)
    }

    const goToNext = () => {
        const isLastSlide = currIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currIndex + 1
        setCurrIndex(newIndex)
    }

    const goToSlide = (index) => {
        setCurrIndex(index)
    }


    return (
        <div style={sliderStyles}>
            <img style={slideStyles} src={slides[currIndex]} />
            <div style={arrowBlock}>
                <div className='arrow-select' style={leftArrowStyles} onClick={goToPrevious}><BiLeftArrow /></div>
                <div style={dotBlock}>
                    {slides.map((slide, slideIndex) => (
                        <div key={slideIndex}>
                            <BsDot className={slideIndex === currIndex ? 'dot active' : 'dot'} key={slideIndex} style={dotStyles} onClick={() => goToSlide(slideIndex) } />
                        </div>
                    ))}
                </div>
                <div className='arrow-select' style={rightArrowStyles} onClick={goToNext}><BiRightArrow /></div>
            </div>
        </div>
    );
};

export default Slider;
