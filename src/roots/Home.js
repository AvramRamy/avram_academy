import React from 'react';
import '../styles/Home.css';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Counter from '../components/Counter';
import Demo from '../components/demoCourses';
import Mentors from '../components/Mentors';
import Reviews from '../components/Reviews';
import Footer from '../components/Footer';
// import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Home() {
    return (
        <>
        <Navbar />
        <Hero />
        <Features />
        <Counter />
        <Demo />
        <Mentors />
        <Reviews />
        <Footer />
        </>
    )
}

export default Home;