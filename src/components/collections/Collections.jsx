import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './collections.css'

import menImg from '../asset/men.jpg'
import womenImg from '../asset/women.jpg'
import dressImg from '../asset/dress.jpg'
import coldImg from '../asset/cold-weather.jpg'

// import swiper

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, EffectCoverflow, Navigation } from 'swiper/modules';

export default function Collections() {
    
    const [menActive, setMenActive] = useState(false)
    const [womenActive, setWomenActive] = useState(false)
    const [dressctive, setDressActive] = useState(false)
    const [coldActive, setColdActive] = useState(false)

  return (
    
    <div className='swiper-container'>
        <Swiper
            effect={'coverflow'}
            slidesPerView={'auto'}
            spaceBetween={40}
            loop={true}
            centeredSlides={true}
            grabCursor={true}
            coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5
            }}
            pagination={{
                el: '',
                clickable: true,
            }}
            // navigation={true}
            modules={[Pagination, EffectCoverflow,Navigation]}
            className="swiper-wrapper"
        >
            <SwiperSlide 
                className= 'swiper-slide'
                onMouseEnter={() => setMenActive(true)} 
                onMouseLeave={() => setMenActive(false)}
                onClick={() => setMenActive(!menActive)}  
            >
                <img src={menImg} alt="" />
                <div className={menActive ? "button-container active" : "button-container"}>
                    <Link to='/shop/men'>MEN</Link>
                </div>
            </SwiperSlide>
            <SwiperSlide 
                className= 'swiper-slide' 
                onMouseEnter={() => setWomenActive(true)} 
                onMouseLeave={() => setWomenActive(false)}
                onClick={() => setWomenActive(!womenActive)} 
            >
                <img src={womenImg} alt="" />
                <div className={womenActive ? "button-container active" : "button-container"}>
                    <Link to='/shop/women'>WOMEN</Link>
                </div>
            </SwiperSlide>
            <SwiperSlide 
                className= 'swiper-slide' 
                onMouseEnter={() => setDressActive(true)} 
                onMouseLeave={() => setDressActive(false)}
                onClick={() => setDressActive(!dressctive)}   
            >
                <img src={dressImg} alt="" />
                <div className={dressctive ? "button-container active" : "button-container"}>
                    <Link to='/shop/women/dresses'>DRESS</Link>
                </div>
            </SwiperSlide>
            <SwiperSlide 
                className= 'swiper-slide'  
                onMouseEnter={() => setColdActive(true)} 
                onMouseLeave={() => setColdActive(false)}
                onClick={() => setColdActive(!coldActive)} 
            >
                <img src={coldImg} alt="" />
                <div className={coldActive ? "button-container active" : "button-container"}>
                    <Link to='/shop/men/jumpers_hoodies'>COLD WEATHER</Link>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
    
  );
}
