import '../styles/heroWebCourse.css';
import React from 'react';
import { useState } from 'react';
import { Fade } from 'react-reveal';

function HeroWebCourse() {
    const DataOnline = [
        {
            h4 : 'الدفعة رقم 59',
            start : '25-6',
            dates : 'الاحد والخميس',
            houres : '6-9 مساء',
        },
        {
            h4 : 'الدفعة رقم 60',
            start : '1-9',
            dates : 'الاحد والاربع',
            houres : '6-9 مساء',
        }
    ];
    const DataOfline = [
        {
            h4 : 'الدفعة رقم 3',
            start : '25-6',
            dates : 'الاحد والخميس',
            houres : '6-9 مساء',
        },
        {
            h4 : 'الدفعة رقم 4',
            start : '1-9',
            dates : 'الاحد والاربع',
            houres : '6-9 مساء',
        }
    ];
    const [toggleState, setToggleState] = useState(1);
    const toggleTap = (index) => {
        setToggleState(index)
    }
    const [click, setClick] = useState(1);
    const handleClick = (index) => {
        setClick(index)
    }
    return (
        <>
        <div className='v'>
            <Fade right>
            <div className='content22'>
                <h1>دورة تطوير واجهات المستخدم</h1>
                <p><i class="fa-solid fa-circle-check"></i>72 ساعة فيديو تدريبية</p>
                <p><i class="fa-solid fa-circle-check"></i>من الصفر دون الحاجة لخبرة مسبقة</p>
                <p><i class="fa-solid fa-circle-check"></i>شهادة معتمدة من أكاديمية افرام</p>
                <p><i class="fa-solid fa-circle-check"></i>متابعة أثناء الدورة وبعدها من قبل فريق مختص</p>
                <p><i class="fa-solid fa-circle-check"></i>ضمان استعادة استثمارك خلال ستة أشهر</p>
                <button onClick={() => handleClick(2)}>احجز الان</button>
            </div>
            </Fade>
            <Fade left>
            <div className='v2'>
                <div className='buttons'>
                    <button 
                    className={toggleState === 1 ? 'button buttonactive' : 'button'}
                    onClick={() => toggleTap(1)}
                    >اونلاين</button>
                    <button 
                    className={toggleState === 2 ? 'button buttonactive' : 'button'}
                    onClick={() => toggleTap(2)}
                    >اوفلاين</button>
                </div>
                <div className={toggleState === 1 ? 'all-online-active' : 'all-online'}>
                    {DataOnline.map((item, index) => {
                        return (
                            <div className='card-all' key={index}>
                                <h4>{item.h4}</h4>
                                <p>سنبدأ : {item.start}</p>
                                <p>المواعيد : {item.dates} من : {item.houres}</p>
                            </div>
                        )
                    })}
                </div>
                <div className={toggleState === 2 ? 'all-ofline-active' : 'all-ofline'}>
                    {DataOfline.map((item, index) => {
                            return (
                                <div className='card-all' key={index}>
                                    <h4>{item.h4}</h4>
                                    <p>سنبدأ : {item.start}</p>
                                    <p>المواعيد : {item.dates} من : {item.houres}</p>
                                </div>
                            )
                        })}
                </div>
            </div>
            </Fade>
        </div>
        <div className={click === 2 ? 'form24' : 'form23'}>
            <i 
            class="fa-regular fa-circle-xmark"
            onClick={() => handleClick(3)}></i>
            <h3>التسجيل فى دورة برمجة المواقع</h3>
            <div>
                <input type="text" placeholder="الاسم رباعى" className='input55' />
                <input type="text" placeholder="رقم الهاتف" className='input55' />
                <button type="submit" id="submitBtn">احجز الان</button>
            </div>
        </div>
        </>
    )
}

export default HeroWebCourse;