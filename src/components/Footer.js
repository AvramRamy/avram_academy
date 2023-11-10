import '../styles/footer.css';
import React from 'react';
// import Video from "../assets/heroSectionVideo1.mp4";
import {Link} from 'react-router-dom';
import { Fade } from 'react-reveal';

function Footer() {
    return (
        <>
        <div className='avero'>
            <div className='al'>
                <Fade right>
                <div className='al3'>
                    <h2>لكل جديد</h2>
                    <p>لمعرفة كل شئ جديد عن دوراتنا وعن التحديثات التى نقوم بها يوميا فعليك ادخال بريدك الالكترونى لتنبيهك بهذه الاشياء</p>
                    <div className='form6'>
                        <input type="email" id="email" name="email" placeholder='البريد الالكترونى' />
                        <button>Submit</button>
                    </div>
                </div>
                </Fade>
                <Fade left>
                <div className='al2'>
                    <div className='Links9'>
                        <h2>روابط هامة</h2>
                        <Link to='/avram_academy/'>الرئيسية</Link>
                        <Link to='/avram_academy/courses'>دوراتنا</Link>
                        <Link to='/avram_academy/about'>من نحن</Link>
                        <Link to='/avram_academy/contact'>تواصل معنا</Link>
                    </div>
                    <div className='Links9'>
                        <h2>الدورات</h2>
                        <Link to='/avram_academy/web-course'>برمجة المواقع</Link>
                        <Link to='/avram_academy/cybersecurity-course'>الامن السيبرانى</Link>
                        <Link to='/avram_academy/mobile-course'>برمجة التطبيقات</Link>
                    </div>
                    <div className='Links9'>
                        <h2>تواصل معنا</h2>
                        <Link to='' className='Linkv'>
                            <i class="fa-brands fa-facebook"></i>
                            <span>فيسبوك</span>
                        </Link>
                        <Link to='' className='Linkv'>
                            <i class="fa-brands fa-instagram"></i>
                            <span>انستغرام</span>
                        </Link>
                        <Link to='' className='Linkv'>
                            <i class="fa-brands fa-twitter"></i>
                            <span>تويتر</span>
                        </Link>
                        <Link to='' className='Linkv'>
                            <i class="fa-brands fa-whatsapp"></i>
                            <span>واتساب</span>
                        </Link>
                    </div>
                    <div className='Links9'>
                        <h2>العناويين</h2>
                        <p>
                            <i class="fa-solid fa-location-dot"></i>
                            مدينة نصر الشارع الخامس 4 
                        </p>
                        <p>
                            <i class="fa-solid fa-location-dot"></i>
                            مدينة نصر الشارع الخامس 4 
                        </p>
                        <p>
                            <i class="fa-solid fa-location-dot"></i>
                            مدينة نصر الشارع الخامس 4 
                        </p>
                        <p>
                            <i class="fa-solid fa-location-dot"></i>
                            مدينة نصر الشارع الخامس 4 
                        </p>
                    </div>
                </div>
                </Fade>
            </div>
        </div>
        </>
    )
}

export default Footer;
