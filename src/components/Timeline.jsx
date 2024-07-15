import React, { useEffect, useRef } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import "../styles/Timeline.css"

const TimelineSwiper = () => {
    const swiperRef = useRef(null);

    useEffect(() => {
        swiperRef.current = new Swiper('.swiper', {
            autoHeight: true,
            autoplay: {
                delay: 5000,
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
                    <li className="swiper-pagination-switch first active"><span className="switch-title">1911</span></li>
                    <li className="swiper-pagination-switch"><span className="switch-title">1970</span></li>
                    <li className="swiper-pagination-switch"><span className="switch-title">2021</span></li>
                    <li className="swiper-pagination-switch last"><span className="switch-title">3000</span></li>
                </ul>
                <div className="swiper-pagination swiper-pagination-progressbar swiper-pagination-horizontal"></div>
                <div className="swiper swiper-container swiper-container--timeline">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide"><span className="title">Swiper Timeline Progressbar</span></div>
                        <div className="swiper-slide"><span className="title">Title 2</span></div>
                        <div className="swiper-slide"><span className="title">Title 3</span></div>
                        <div className="swiper-slide"><span className="title">Title 4</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TimelineSwiper;
