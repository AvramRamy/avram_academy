import React from 'react';
import Navbar from '../components/Navbar';
import HeroWebCourse from '../components/heroWebCourse';
import CourseAbout from '../components/courseAbout';
import Features from '../components/Features';
import WebForWho from '../components/webForWho';
import YoullLearnWeb from '../components/youllLearnWeb';
import Reviews from '../components/Reviews';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
// import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function WebCourses() {
    return (
        <>
        <Navbar />
        <HeroWebCourse />
        <CourseAbout Data="في هذه الدورة، ستبدأ رحلتك في عالم تطوير مواقع الويب. ستتعلم كيفية بناء صفحات ويب باستخدام HTML وCSS. HTML تستخدم لإنشاء الهيكل الأساسي لصفحات الويب، بينما يستخدم CSS لتنسيق وتزيين هذه الصفحات بألوان وأنماط مختلفة. بالإضافة إلى ذلك، ستبدأ في استخدام JavaScript لجعل صفحات الويب تفاعلية ومتقدمة. ستكتسب المهارات التي تمكنك من بناء موقع ويب شخصي أو موقع للأعمال التجارية."/>
        <WebForWho />
        <Features />
        <YoullLearnWeb />
        <Reviews />
        <FAQ />
        <Footer />
        </>
    )
}

export default WebCourses;