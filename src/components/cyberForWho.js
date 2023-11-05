import '../styles/webForWho.css';
import React from 'react';
import img from '../assets/Cyber-Security.png';
import { Fade } from 'react-reveal';

function CyberForWho() {
    return (
        <>
        <div className='avram77'>
            <Fade>
            <h1>لمن هذه الدورة</h1>
            </Fade>
            <div className='avram66'>
                <Fade right>
                <div className='avram88'>
                    <ul>
                        <li>تعزيز معرفتك ومهاراتك في مجال الأمان السيبراني.</li>
                        <li>تحليل وتقييم الضعف في الأنظمة والتطبيقات.</li>
                        <li>تعلم كيفية توفير حماية من الهجمات السيبرانية.</li>
                        <li>استراتيجيات الأمان الشاملة لحماية البيانات والمعلومات.</li>
                    </ul>
                </div>
                </Fade>
                <Fade left>
                <div className='avram99'>
                    <img src={img} />
                </div>
                </Fade>
            </div>
        </div>
        </>
    )
}

export default CyberForWho;