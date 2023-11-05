import React from 'react';
import Navbar from '../components/Navbar';
import AboutHero from '../components/aboutHero';
import Reviews from '../components/Reviews';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
// import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function About() {
    return (
        <>
        <Navbar />
        <AboutHero />
        <Reviews />
        <FAQ />
        <Footer />
        </>
    )
}

export default About;