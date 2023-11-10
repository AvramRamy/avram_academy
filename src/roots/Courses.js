import React from 'react';
import Navbar from '../components/Navbar';
import Full from '../components/fullCourses';
import Features from '../components/Features';
import Counter from '../components/Counter';
import Mentors from '../components/Mentors';
import Reviews from '../components/Reviews';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';
// import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Courses() {
    return (
        <>
        <Helmet>
            <style type='text/css'>{`
            .avram1 {
                padding: 150px 0 100px 0;
            }
            `}
            </style>
        </Helmet>
        <Navbar />
        <Full />
        <Features />
        <Counter />
        <Mentors />
        <Reviews />
        <Footer />
        </>
    )
}

export default Courses;