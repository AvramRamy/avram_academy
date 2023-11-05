import '../styles/courseAbout.css';
import React from 'react';
import { Fade } from 'react-reveal';

function CourseAbout ({Data}) {
    return (
        <>
        <div className='vero77'>
        <Fade top>
            <h1>عن الدورة</h1>
            <p>{Data}</p>
        </Fade>
        </div>
        
        </>
    )
}

export default CourseAbout;