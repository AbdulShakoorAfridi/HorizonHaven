import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import {Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

import sliderImg1 from '../assets/slider-images/1.png'
import sliderImg2 from '../assets/slider-images/2.png'
import sliderImg3 from '../assets/slider-images/3.png'
import sliderImg4 from '../assets/slider-images/4.png'
import sliderImg5 from '../assets/slider-images/5.png'
import sliderImg6 from '../assets/slider-images/6.png'
import sliderImg7 from '../assets/slider-images/7.png'

const sliderImgs = [
  {
    id:1,
    img:sliderImg1
  },
  {
    id:2,
    img:sliderImg2
  },
  {
    id:3,
    img:sliderImg3
  },
  {
    id:4,
    img:sliderImg4
  },
  {
    id:5,
    img:sliderImg5
  },
  {
    id:6,
    img:sliderImg6
  },
  {
    id:7,
    img:sliderImg7
  }
]


function SliderTop() {
  return (
    <main className='w-2/3 flex items-center justify-center'>
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        // pagination={true}
        modules={[Autoplay, EffectCoverflow]}
        className="mySwiper p-4"
      >
        {
          sliderImgs.map((imgItem) =>{
            const {img , id} = imgItem;
            return(
              <SwiperSlide key={id} >
              <img src={img}/>
             </SwiperSlide>
            )
          })
        }
    
      </Swiper>
    </>
    </main>
  );
}

export default SliderTop




