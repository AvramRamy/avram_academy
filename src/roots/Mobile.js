import React from 'react';
import Navbar from '../components/Navbar';
import HeroMobileCourse from '../components/heroMobileCourse';
import CourseAbout from '../components/courseAbout';
import Features from '../components/Features';
import MobileForWho from '../components/mobileForWho';
import YoullLearnMobile from '../components/youllLearnMobile';
import Reviews from '../components/Reviews';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
// import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Mobile() {
    return (
        <>
        <Navbar />
        <HeroMobileCourse />
        <CourseAbout Data="في هذه الدورة، ستتعلم كيفية بناء تطبيقات سطح المكتب أو الجوال باستخدام لغات برمجة مثل Java، Swift، أو C#. ستستخدم بيئات تطوير متخصصة مثل Android Studio لتطبيقات Android وXcode لتطبيقات iOS. ستتعلم كيفية تصميم وتطوير تطبيقات تلبي احتياجات المستخدمين وتوفير تجربة مستخدم مريحة وجذابة."/>
        <MobileForWho />
        <Features />
        <YoullLearnMobile />
        <Reviews />
        <FAQ />
        <Footer />
        </>
    )
}

export default Mobile;