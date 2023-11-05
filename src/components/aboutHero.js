import '../styles/aboutHero.css';
import React from 'react';
import { Fade } from 'react-reveal';
import { useState } from 'react';
import image from '../assets/academy.png';

function AboutHero () {
    const Data = [
        {
            addrese : 'مدينة نصر الشارع الخامس 4',
        },
        {
            addrese : 'مدينة نصر الشارع الخامس 4',
        },
        {
            addrese : 'مدينة نصر الشارع الخامس 4',
        },
        {
            addrese : 'مدينة نصر الشارع الخامس 4',
        }
    ]
    const [click, setClick] = useState(1);
    const handleClick = (index) => {
        setClick(index)
    }
    return (
        <>
        <div className='alllll'>
            <Fade right>
            <div className='one'>
                <div className='btns-one'>
                    <button onClick={() => handleClick(1)} className={click === 1 ? 'buttonactive' : 'button'}>من نحن</button>
                    <button onClick={() => handleClick(2)} className={click === 2 ? 'buttonactive' : 'button'}>فروعنا</button>
                </div>
                <Fade right>
                <div className={click === 1 ? 'oneactive' : 'one1'}>
                    <p className='p'>مرحبًا بك في أكاديميتنا، حيث نقدم تجربة تعليمية استثنائية تجمع بين الإلهام والتحفيز. نحن نؤمن بقوة التعليم في تحقيق النجاح وتغيير الحياة. في أكاديميتنا، نقدم دورات عالية الجودة في مجالات البرمجة وأمان السيبراني، حيث يمكنك اكتساب المعرفة والمهارات التي تحتاجها للتميز في عالم التكنولوجيا. نحن نجمع بين التعليم النظري والتطبيق العملي لضمان أنك لن تكون مجرد معرفة نظرية، بل ستكون مجهزًا بالمهارات اللازمة للعمل في صناعة التكنولوجيا. انضم إلى مجتمعنا المتنوع من المتعلمين والمحترفين، واستفد من التبادلات والفرص الشبكية التي ستساعدك في بناء شبكة مهنية قوية. في أكاديميتنا، نعمل جنبًا إلى جنب معك لمساعدتك في تحقيق أهدافك وتحويل أفكارك إلى واقع. انطلق معنا في رحلة التعلم والنجاح.</p>
                </div>
                </Fade>
                <div className={click === 2 ? 'twoactive' : 'two2'}>
                    {Data.map((item, index) => {
                        return (
                            <Fade right>
                            <div className='carddd' key={index}>
                                <p><i class="fa-solid fa-location-dot"></i>{item.addrese}</p>
                            </div>
                            </Fade>
                        )
                    })}
                </div>
            </div>
            </Fade>
            <Fade left>
            <div className='two'>
                <Fade left>
                <h1 className={click === 2 ? 'headeractive' : 'header'}>أكاديمية <span>أفرام</span></h1>
                </Fade>
                <Fade left>
                <img src={image} className={click === 1 ? 'imageactive' : 'image'}></img>
                </Fade>
            </div>
            </Fade>
        </div>
        </>
    )
}

export default AboutHero;