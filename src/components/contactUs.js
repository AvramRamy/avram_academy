import '../styles/contactUs.css'
import React from 'react';
import { Fade } from 'react-reveal';

function ContactUs() {
    return (
        <div className='all-contact'>
            <div className="contact-us">
                <Fade top>
                <h1>تواصل معنا</h1>
                <form>
                    <div className="form-group">
                        <input type="text" id="name" name="name" placeholder="الاسم رباعى" />
                    </div>
                    <div className="form-group">
                        <input type="email" id="email" name="email" placeholder="بريدك الالكترونى" />
                    </div>
                    <div className="form-group">
                        <textarea id="message" name="message" placeholder="الرسالة"></textarea>
                    </div>
                    <button className='buuuuton' type="submit">تم</button>
                </form>
                </Fade>
            </div>
        </div>
    );
}

export default ContactUs;