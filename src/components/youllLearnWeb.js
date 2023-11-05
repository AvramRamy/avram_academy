import '../styles/youllLearnWeb.css';
import React from 'react';
import { Fade } from 'react-reveal';

function YoullLearnWeb() {
    const Data = [
        {
            h3 : 'أساسيات تطوير الويب',
            p : 'ستتعلم لغة التوصيف HTML و لغة التنسيق CSS ولغة البرمجة جافاسكربت JavaScript.',
        },
        {
            h3 : 'بناء واجهة مستخدم تشبه موقع YouTube',
            p : 'ستتعلم بناء واجهة مستخدم مشابهة لموقع يوتيوب YouTube.',
        },
        {
            h3 : 'بناء صفحات الهبوط',
            p : 'ستتعلم بناء صفحات هبوط لمنتج، ولشركة، ولتطبيق جوال، وصفحة شخصية، وصفحة قريبًا الانطلاق.',
        },
        {
            h3 : 'تطوير متجر إلكتروني',
            p : 'ستتعلم بناء واجهة متجر إلكتروني مكون من ست صفحات من الصفر باستخدام Bootstrap 5 و Sass و Webpack.',
        },
        {
            h3 : 'تطوير موقع شركة',
            p : 'ستتعلم بناء موقع احترافي لشركة مع Sass و Webpack.',
        },
        {
            h3 : 'بناء لوحة تحكم',
            p : 'ستبني لوحة تحكم تفاعلية من الصفر وتستعمل فيها أفضل أساليب التطوير.',
        },
        {
            h3 : 'تطوير موقع أخباري',
            p : 'سنتعلم بناء قالب لموقع أخباري متكامل مع عرض بيانات ديناميكية عبر API.',
        },
        {
            h3 : 'بناء مواقع ثابتة باستخدم Hugo',
            p : 'سنتعلم بناء صفحة شخصية وموقع شركة ومدونة باستخدام إطار تطوير المواقع الثابتة Hugo.',
        }
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

export default YoullLearnWeb;