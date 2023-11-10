import '../styles/Hero.css';
import React from 'react';
import Video from "../assets/heroSectionVideo1.mp4";
import {Link} from 'react-router-dom';

function Hero() {
    return (
        <>
        <div className='hero'>
            <div className='video'>
                <video autostart autoPlay muted loop src={Video} type="video/mp4" />
            </div>
            <div className='content'>
                <h1>الاكاديمية رقم واحد فى مصر لتعلم البرمجة</h1>
                <button><Link to='/avram_academy/courses' className='Link'>أستكشاف الدورات</Link></button>
            </div>
        </div>
        </>
    )
}

export default Hero;