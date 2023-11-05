// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import man1 from '../assets/man1.jpg';
import man2 from '../assets/man2.jpg';
import women1 from '../assets/women1.jpg';
import women2 from '../assets/women2.jpg';
import { Fade } from 'react-reveal';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import '../styles/reviews.css';
import 'swiper/css/pagination';


function Reviews() {
    const Data = [
        {
            img : man1,
            h2 : "افرام رامى",
            p : "نا احببت هذه المنصة كثيرا...نا احببت هذه المنصة كثيرا...نا احببت هذه المنصة كثيرا...نا احببت هذه المنصة كثيرا...نا احببت هذه المنصة كثيرا..."
        },
        {
            img : man2,
            h2 : "افرام رامى",
            p : "نا احببت هذه المنصة كثيرا...نا احببت هذه المنصة كثيرا...نا احببت هذه المنصة كثيرا...نا احببت هذه المنصة كثيرا...نا احببت هذه المنصة كثيرا..."
        },
        {
            img : women1,
            h2 : "افرام رامى",
            p : "نا احببت هذه المنصة كثيرا...نا احببت هذه المنصة كثيرا...نا احببت هذه المنصة كثيرا...نا احببت هذه المنصة كثيرا...نا احببت هذه المنصة كثيرا..."
        },
        {
            img : women2,
            h2 : "افرام رامى",
            p : "نا احببت هذه المنصة كثيرا...نا احببت هذه المنصة كثيرا...نا احببت هذه المنصة كثيرا...نا احببت هذه المنصة كثيرا...نا احببت هذه المنصة كثيرا..."
        }
    ]
    return (
        <>
        <section className='main'>
            <Fade>
            <h1>اراء طلابنا</h1>
            </Fade>
            <Fade>
            <Swiper className='avram'
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
                {Data.map((item, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className='vero'>
                                <img src={item.img}></img>
                                <h2>{item.h2}</h2>
                                <p>{item.p}</p>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
            </Fade>
        </section>
        </>
    )
}

export default Reviews;