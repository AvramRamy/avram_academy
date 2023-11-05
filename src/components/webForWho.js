import '../styles/webForWho.css';
import React from 'react';
import img from '../assets/front-end-web-development.png';
import { Fade } from 'react-reveal';

function WebForWho() {
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
                        <li>من لا يمتلك خبرة مسبقة في مجال تطوير المواقع و واجهات المستخدم</li>
                        <li>من يمتلك خبرة بسيطة ويرغب في صقل مهاراته</li>
                        <li>المبرمج أو مصمم الجرافيك الذي يرغب بتعلم بناء واجهات المستخدم لتطبيقات الويب</li>
                        <li>من يرغب باكتساب مهارت جديدة تساعده على تحسين دخله كفرصة عمل أفضل</li>
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

export default WebForWho;