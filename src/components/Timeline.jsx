import { useEffect, useRef } from 'react';
import '../styles/Timeline.css';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const TimelineSwiper = ({processStages}) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    swiperRef.current = new Swiper('.swiper', {
      autoHeight: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      speed: 500,
      direction: 'horizontal',
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
      },
      loop: false,
      effect: 'slide',
      spaceBetween: 30,
      on: {
        init: function () {
          document.querySelectorAll('.swiper-pagination-custom .swiper-pagination-switch').forEach((el, index) => {
            el.classList.remove('active');
            if (index === 0) el.classList.add('active');
          });
        },
        slideChangeTransitionStart: function () {
          document.querySelectorAll('.swiper-pagination-custom .swiper-pagination-switch').forEach((el, index) => {
            el.classList.remove('active');
            if (index === swiperRef.current.realIndex) el.classList.add('active');
          });
        },
      },
    });

    document.querySelectorAll('.swiper-pagination-custom .swiper-pagination-switch').forEach((el, index) => {
      el.addEventListener('click', () => {
        swiperRef.current.slideTo(index);
        document.querySelectorAll('.swiper-pagination-custom .swiper-pagination-switch').forEach((el) => el.classList.remove('active'));
        el.classList.add('active');
      });
    });

    return () => {
      if (swiperRef.current) swiperRef.current.destroy(true, true);
    };
  }, []);

  return (
    <div className="container">
      <div className="swiper-container-wrapper swiper-container-wrapper--timeline">
        <ul className="swiper-pagination-custom">
            {processStages.map((stage, index) => {
                return (
          <li key={index} className="swiper-pagination-switch first active"><span className="switch-title">{stage.stage}</span></li>
                )
            })}
        </ul>
        <div className="swiper-pagination swiper-pagination-progressbar swiper-pagination-horizontal"></div>
        <div className="swiper swiper-container swiper-container--timeline">
          <div className="swiper-wrapper">
            {processStages.map((stage, index) => {
                return (
            <div key={index} className="swiper-slide swiper-box">
                    <div className='swiper-parent-box'>
                      <img src="https://picsum.photos/1000/700" alt={stage.stage} className='process-image'/>
                      <div className='title process-title'>{stage.description}</div>
                      </div>
                </div>
                )
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineSwiper;
