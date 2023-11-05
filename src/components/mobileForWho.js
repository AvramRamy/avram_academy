import '../styles/webForWho.css';
import React from 'react';
import img from '../assets/mobile-development.png';
import { Fade } from 'react-reveal';

function MobileForWho() {
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
                        <li>تعلم كيفية بناء تطبيقات سطح المكتب أو الجوال.</li>
                        <li>استخدام لغات البرمجة مثل Java، Swift، أو C#.</li>
                        <li>تصميم تطبيقات تلبي احتياجات المستخدمين على مختلف الأنظمة.</li>
                        <li>تقديم تجربة مستخدم ممتازة وجذابة.</li>
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

export default MobileForWho;