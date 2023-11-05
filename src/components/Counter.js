import '../styles/counter.css';
import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
// import Video from "../assets/heroSectionVideo1.mp4";
// import {Link} from 'react-router-dom';

function Counter() {
    const [counterOn, setCounterOn] = useState(false);
    return (
        <>
        <ScrollTrigger onEnter={ () => setCounterOn(true)} 
        onExit={ () => setCounterOn(false)}>
            <section className='counter-section'>
                <div className='avram66'>
                    <h1>
                        {counterOn && <CountUp start={0} end={50} duration={2} delay={0}/>}+
                    </h1>
                    <h3>محاضرين</h3>
                </div>
                <div className='avram66'>
                    <h1>
                        {counterOn && <CountUp start={0} end={3000} duration={2} delay={0}/>}+
                    </h1>
                    <h3>متدرب</h3>
                </div>
                <div className='avram66'>
                    <h1>
                        {counterOn && <CountUp start={0} end={15} duration={3} delay={0}/>}+
                    </h1>
                    <h3>شركة داعمة</h3>
                </div>
            </section>
        </ScrollTrigger>
        </>
    )
}

export default Counter;