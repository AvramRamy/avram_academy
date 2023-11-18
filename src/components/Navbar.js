import '../styles/NavbarStyles.css';
import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MenuItems } from './Menu-Items';
// import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Navbar extends Component {
    state = { clicked: false };
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render () {
    return (
        <nav className='NavbarItemsAvram'>
            <Link to='/avram_academy'>
                <h1 className='Navbar-logo'>اكاديمية <span>أفرام</span></h1>
            </Link>
            <div className='menu-icons' onClick={this.handleClick}>
                <i className={this.state.clicked ? 
                "fas fa-times" : "fas fa-bars"}></i>
            </div>
            <ul className={this.state.clicked ?
            "Nav-menu active" : "Nav-menu"}>
                {MenuItems.map((item, index) => {
                    return(
                        <li key={index}>
                        <NavLink to={item.url} className={item.cName}>
                        <i className={item.icon}></i>
                        {item.title}
                        </NavLink>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )}
}

export default Navbar;