import '../styles/features.css';
import React from 'react';
import Teacher from '../assets/teacher.png';
import Money from '../assets/investment-Money.png';
import Certificate from '../assets/certificate.png';
import Tracks from '../assets/plus.png';
import Cv from '../assets/cv.png';
import Portofolio from '../assets/portofolio.png';
import Projects from '../assets/project.png';
import Lifetime from '../assets/lifetime.png';
import Updates from '../assets/update.png';
// import {Link} from 'react-router-dom';
import { Fade } from 'react-reveal';

function Features() {
    const Data = [
        {
            img : Teacher,
            h3 : "ارشادات دائمة من المدربين",
            p : "نجيب عن أسئلتك واستفساراتك عبر فريق من المدربين المختصين على مدار الساعة",
        },
        {
            img : Money,
            h3 : "ضمان استرداد استثمارك",
            p : "بعد حصولك على الشهادة، وإن لم تحصل على عمل خلال 6 أشهر يغطي قيمة الدورة التي دفعتها، فسنعيد لك ما دفعت. بهذه البساطة",
        },
        {
            img : Certificate,
            h3 : "شهادة معتمدة",
            p : "شهادتنا معتمدة تعطى بعد اجتياز الامتحان بنجاح وتقديم مشروع حقيقي للتخرج، وليست شهادة حضور.",
        },
        {
            img : Tracks,
            h3 : "وصول لمسارات الأساسيات",
            p : "باشتراكك في هذه الدورة ستحصل أيضًا على وصول للمسار الأول في جميع دورات أكاديمية حسوب الأخرى.",
        },
        {
            img : Cv,
            h3 : "خدمة كتابة السيرة الذاتية مجانًا",
            p : "بعد منحك الشهادة ستحصل على باقة كتابة السيرة الذاتية في موقع بعيد بقيمة 99$ مجانًا.",
        },
        {
            img : Portofolio,
            h3 : "بناء معرض أعمال",
            p : "حين إتمامك للدورة وتطبيقك العملي معها، سيكون لديك مجموعة رائعة من المشاريع العملية في معرض أعمالك.",
        },
        {
            img : Projects,
            h3 : "مشاريع عملية حقيقية",
            p : "دوراتنا مطورة اعتمادًا على حاجات سوق العمل، حسوب صاحبة أكبر مواقع العمل العربية: خمسات ومستقل وبعيد.",
        },
        {
            img : Lifetime,
            h3 : "وصول مدى الحياة",
            p : "عندما تشترك في هذه الدورة فستدفع التكلفة مرة واحدة فقط، لا توجد رسوم دورية.",
        },
        {
            img : Updates,
            h3 : "تحديثات مستمرة مجانية",
            p : "نحدث دوراتنا باستمرار، وسنضيف مسارات جديدة ونحدث المحتوى الحالي دوريًا.",
        }
    ]
    return (
        <>
        <section>
            <div className='heading' >
                <Fade>
                <h1>مميزات دوراتنا</h1>
                </Fade>
            </div>
            <div className='cards'>
                {Data.map((item, index) => {
                    return (
                        <Fade top distance="20%">
                        <div className='card' key={index}>
                            <div>
                                <img src={item.img}></img>
                            </div>
                            <div>
                                <h3>{item.h3}</h3>
                                <p>{item.p}</p>
                            </div>
                        </div>
                        </Fade>
                    )
                })}
            </div>
        </section>
        </>
    )
}

export default Features;