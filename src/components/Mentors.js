import '../styles/mentors.css';
import React from 'react';
import avatar1 from '../assets/avatar-01.png';
import avatar2 from '../assets/avatar-02.png';
import avatar3 from '../assets/avatar-03.png';
import avatar4 from '../assets/avatar-04.png';
import avatar5 from '../assets/avatar-05.png';
import avatar6 from '../assets/avatar-06.png';
// import Video from "../assets/heroSectionVideo1.mp4";
// import {Link} from 'react-router-dom';
import { Fade } from 'react-reveal';

function Mentors() {
    return (
        <>
            <div className="testimonials" id="testimonials">
              <Fade>
      <h1 className="main-title">نبذة عن المحاضرين</h1>
      </Fade>
      <Fade bottom distance="20%">
      <div className="container">
        <div className="box">
          <img src={avatar1} alt="" />
          <h3>محمد فرج</h3>
          <span className="title">مطور مواقع</span>
          <div className="rate">
            <i className="filled fas fa-star"></i>
            <i className="filled fas fa-star"></i>
            <i className="filled fas fa-star"></i>
            <i className="filled fas fa-star"></i>
            <i className="far fa-star"></i>
          </div>
          <p>نجيب عن أسئلتك واستفساراتك عبر فريق من المدربين المختصين على مدار الساعة.</p>
        </div>
        <div className="box">
          <img src={avatar2} alt="" />
          <h3>محمد ابراهيم</h3>
          <span className="title">مطور تطبيقات موبايل</span>
          <div className="rate">
            <i className="filled fas fa-star"></i>
            <i className="filled fas fa-star"></i>
            <i className="filled fas fa-star"></i>
            <i className="filled fas fa-star"></i>
            <i className="far fa-star"></i>
          </div>
          <p>نجيب عن أسئلتك واستفساراتك عبر فريق من المدربين المختصين على مدار الساعة.</p>
        </div>
        <div className="box">
          <img src={avatar3} alt="" />
          <h3>شادى نبيل</h3>
          <span className="title">مطور ذكاء اصطناعى</span>
          <div className="rate">
            <i className="filled fas fa-star"></i>
            <i className="filled fas fa-star"></i>
            <i className="filled fas fa-star"></i>
            <i className="filled fas fa-star"></i>
            <i className="far fa-star"></i>
          </div>
          <p>نجيب عن أسئلتك واستفساراتك عبر فريق من المدربين المختصين على مدار الساعة.</p>
        </div>
        <div className="box">
          <img src={avatar4} alt="" />
          <h3>افرام رامى</h3>
          <span className="title">مطور مواقع</span>
          <div className="rate">
            <i className="filled fas fa-star"></i>
            <i className="filled fas fa-star"></i>
            <i className="filled fas fa-star"></i>
            <i className="filled fas fa-star"></i>
            <i className="filled fas fa-star"></i>
          </div>
          <p>نجيب عن أسئلتك واستفساراتك عبر فريق من المدربين المختصين على مدار الساعة.</p>
        </div>
        <div className="box">
          <img src={avatar5} alt="" />
          <h3>شريف اشرف</h3>
          <span className="title">امن سيبرانى</span>
          <div className="rate">
            <i className="filled fas fa-star"></i>
            <i className="filled fas fa-star"></i>
            <i className="filled fas fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
          </div>
          <p>نجيب عن أسئلتك واستفساراتك عبر فريق من المدربين المختصين على مدار الساعة.</p>
        </div>
        <div className="box">
          <img src={avatar6} alt="" />
          <h3>مارتن جميل</h3>
          <span className="title">مطور روبوتات</span>
          <div className="rate">
            <i className="filled fas fa-star"></i>
            <i className="filled fas fa-star"></i>
            <i className="filled fas fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
          </div>
          <p>نجيب عن أسئلتك واستفساراتك عبر فريق من المدربين المختصين على مدار الساعة.</p>
        </div>
      </div>
      </Fade>
    </div>
        </>
    )
}

export default Mentors;