import React, {useState} from 'react';
import './Slider.css'
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi'


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
        left: '32px',
        fontSize: '30px',
        zIndex: '2',
        cursor: 'pointer'
    }

    const rightArrowStyles = {
        position: 'absolute',
        right: '32px',
        fontSize: '30px',
        zIndex: '2',
        cursor: 'pointer'
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


    return (
        <div style={sliderStyles}>
            <img style={slideStyles} src={slides[currIndex]} />
            <div>
            <div style={leftArrowStyles} onClick={goToPrevious}><BiLeftArrow /></div>
            <div style={rightArrowStyles} onClick={goToNext}><BiRightArrow /></div>
            </div>
        </div>
    );
};

export default Slider;
