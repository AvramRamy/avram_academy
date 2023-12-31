import '../styles/youllLearnWeb.css';
import React from 'react';
import { Fade } from 'react-reveal';

function YoullLearnMobile() {
    const Data = [
        {
            h3 : 'ستتعلم كيفية بناء تطبيقات متقدمة ومتعددة المنصات',
            p : 'ستتعلم كيفية بناء تطبيقات متقدمة ومتعددة المنصات، مما يمنحك إمكانية الوصول إلى جمهور واسع.',
        },
        {
            h3 : 'ستتعلم تقنيات تخزين وإدارة البيانات والتفاعل مع الخدمات وقواعد البيانات.',
            p : 'ستتعلم تقنيات تخزين وإدارة البيانات والتفاعل مع الخدمات وقواعد البيانات.ستتعلم تقنيات تخزين وإدارة البيانات والتفاعل مع الخدمات وقواعد البيانات.',
        },
        {
            h3 : 'ستتطلع إلى فهم عميق لتطبيقات الواجهة الأمامية وتصميم واجهات جذابة.',
            p : 'ستتطلع إلى فهم عميق لتطبيقات الواجهة الأمامية وتصميم واجهات جذابة.ستتطلع إلى فهم عميق لتطبيقات الواجهة الأمامية وتصميم واجهات جذابة.',
        },
        {
            h3 : 'بعد انتهائك من الدورة، ستكون قادرًا على تطوير تطبيقات جاهزة للسوق ',
            p : 'بعد انتهائك من الدورة، ستكون قادرًا على تطوير تطبيقات جاهزة للسوق والعمل كمطور مستقل أو في الصناعة.',
        },
        {
            h3 : 'ستتعلم كيفية بناء تطبيقات متقدمة ومتعددة المنصات',
            p : 'ستتعلم كيفية بناء تطبيقات متقدمة ومتعددة المنصات، مما يمنحك إمكانية الوصول إلى جمهور واسع.',
        },
        {
            h3 : 'ستتعلم تقنيات تخزين وإدارة البيانات والتفاعل مع الخدمات وقواعد البيانات.',
            p : 'ستتعلم تقنيات تخزين وإدارة البيانات والتفاعل مع الخدمات وقواعد البيانات.ستتعلم تقنيات تخزين وإدارة البيانات والتفاعل مع الخدمات وقواعد البيانات.',
        },
        {
            h3 : 'ستتطلع إلى فهم عميق لتطبيقات الواجهة الأمامية وتصميم واجهات جذابة.',
            p : 'ستتطلع إلى فهم عميق لتطبيقات الواجهة الأمامية وتصميم واجهات جذابة.ستتطلع إلى فهم عميق لتطبيقات الواجهة الأمامية وتصميم واجهات جذابة.',
        },
        {
            h3 : 'بعد انتهائك من الدورة، ستكون قادرًا على تطوير تطبيقات جاهزة للسوق ',
            p : 'بعد انتهائك من الدورة، ستكون قادرًا على تطوير تطبيقات جاهزة للسوق والعمل كمطور مستقل أو في الصناعة.',
        },
    ]
    return (
        <>
        <div className='all55'>
            <Fade>
            <h1>ماذا ستتعلم في هذه الدورة؟</h1>
            </Fade>
            <div className='avram-all66'>
                {Data.map((item, index) => {
                    return (
                        <Fade right>
                        <div className='avram-card66' key={index}>
                            <h3><i class="fa-solid fa-circle-check"/>{item.h3}</h3>
                            <p>{item.p}</p>
                        </div>
                        </Fade>
                    )
                })}
            </div>
        </div>
        </>
    )
}

export default YoullLearnMobile;