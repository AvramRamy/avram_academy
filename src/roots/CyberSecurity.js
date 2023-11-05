import React from 'react';
import Navbar from '../components/Navbar';
import HeroCyberCourse from '../components/heroCyberCourse';
import CourseAbout from '../components/courseAbout';
import CyberForWho from '../components/cyberForWho';
import Features from '../components/Features';
import YoullLearnCyber from '../components/youllLearnCyber';
import Reviews from '../components/Reviews';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
// import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CyberSecurity() {
    return (
        <>
        <Navbar />
        <HeroCyberCourse />
        <CourseAbout Data="هذه الدورة تعنى بفهم وتعزيز الأمان السيبراني. ستتعلم كيفية تحليل وتقييم الضعف في الأنظمة والتطبيقات، وكيفية تقديم الحماية من الهجمات السيبرانية. ستدرك أهمية تطبيق مبادئ الأمان والتشفير لحماية البيانات والمعلومات. ستتعلم أيضًا كيفية استخدام أدوات الاختبار والاختراق لتقييم الأمان وتطوير استراتيجيات الأمان الشاملة.
هذه الدورات ستزود الطلاب بالمعرفة والمهارات اللازمة للنجاح في عالم تطوير البرمجيات والأمان السيبراني. ستكون هذه الأسس مفيدة لمن يسعون لبناء مواقع وتطبيقات والعمل على تحسين الأمان السيبراني لأنفسهم أو للشركات التي يعملون معها."/>
        <CyberForWho />
        <Features />
        <YoullLearnCyber />
        <Reviews />
        <FAQ />
        <Footer />
        </>
    )
}

export default CyberSecurity;