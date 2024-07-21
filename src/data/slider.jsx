// import { Funmovie } from './movie'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import React from 'react';
// import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import banner1 from '../images/premium/banner1.png';
import banner2 from '../images/premium/bannner2.png';
import banner3 from '../images/premium/banner3.png';
import banner4 from '../images/premium/banner4.png';
import banner5 from '../images/premium/banner5.png';
import banner6 from '../images/premium/banner6.png';
// import banner7 from '../images/premium/banner7.png';

export function Sliding() {
  return (
    <div className="swiper-container">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}

        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        // navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
      >
        <SwiperSlide><img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1717080055549_playcardweb.jpg" alt="" style={{ width: "100%", height: "310px" }} /></SwiperSlide>
        <SwiperSlide><img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1719581026641_piyushmishra.jpg" alt="" srcset="" style={{ width: "100%", height: "310px" }} /></SwiperSlide>
        <SwiperSlide><img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1719984285226_bb1240x300.jpg" alt="" srcset="" style={{ width: "100%", height: "310px" }} /></SwiperSlide>
        <SwiperSlide><img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1719581026641_piyushmishra.jpg" alt="" srcset="" style={{ width: "100%", height: "310px" }} /></SwiperSlide>
      </Swiper>
      {/* <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div> */}
    </div>
  );
};
export function Sliding1() {
  return (<>

    <div className='slider-container-set1'>
      <img src={banner1} alt="" className='img-con' />
      <div className='head-con'>

      <h1>Premieres</h1>
      <h5>Brand new releases every Friday</h5>
      </div>

      <img src={banner2} alt="" className='img-con-set1'  />
      

      <img src={banner3} alt="" className='img-con-set1' />
    
      <img src={banner4} alt="" className='img-con-set1' />
      <img src={banner5} alt="" className='img-con-set1' />
      <img src={banner6} alt="" className='img-con-set1' />
      {/* <img src={banner7} alt="" className='img-con-set1' /> */}
    </div>
  </>)
}
// import React from 'react'
// import img2 from '../src/data/images/jatt1.png'


// export default Container
