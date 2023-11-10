import '../styles/demoCourses.css';
import React from 'react';
import cyberSecurity from '../assets/security.jpg';
import web from '../assets/Web.jpg';
import mobile from '../assets/mobile.jpg';
// import Video from "../assets/heroSectionVideo1.mp4";
import {Link} from 'react-router-dom';
import { Fade } from 'react-reveal';

function Demo() {
    const Data = [
        {
            url : '/avram_academy/cybersecurity-course',
            img : cyberSecurity,
            h2 : 'الأمن السيبرانى',
            p : 'نجيب عن أسئلتك واستفساراتك عبر فريق من المدربين المختصين على مدار الساعة'
        },
        {
            url : '/avram_academy/web-course',
            img : web,
            h2 : 'برمجة المواقع',
            p : 'نجيب عن أسئلتك واستفساراتك عبر فريق من المدربين المختصين على مدار الساعة'
        },
        {
            url : '/avram_academy/mobile-course',
            img : mobile,
            h2 : 'برمجة التطبيقات',
            p : 'نجيب عن أسئلتك واستفساراتك عبر فريق من المدربين المختصين على مدار الساعة'
        }
    ] 
    return (
        <>
        <section className='avram1'>
            <Fade>
            <h1 className='header'>دوراتنا</h1>
            </Fade>
            <div className='container'>
                {Data.map((item, index) => {
                    return (
                        <Fade bottom distance="20%">
                        <Link to={item.url} key={index}>
                            <div className='box'>
                                <div className='image-holder'>
                                    <img src={item.img} />
                                </div>
                                <h2>{item.h2}</h2>
                                <p>{item.p}</p>
                                <button><Link to={item.url} className='link'>المزيد</Link></button>
                            </div>
                        </Link>
                        </Fade>
                    )
                })}
            </div>
            <Fade>
            <button><Link to='/courses' className='link'>جميع الدورات</Link></button>
            </Fade>
        </section>
        </>
    )
}

export default Demo;