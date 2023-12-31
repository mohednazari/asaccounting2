'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay],
    slidesPerView: 5,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
    }
}

export default function LogoSlider2() {
    return (
        <>
            <Swiper {...swiperOptions} className="logos logos2 owl-carousel">
                <SwiperSlide className="single-logo">
                    <img src="/assets/img/logo/186dental.png" alt="" />
                </SwiperSlide>
                <SwiperSlide className="single-logo">
                    <img src="/assets/img/logo/brightsmile.png" alt="" />
                </SwiperSlide>
                <SwiperSlide className="single-logo">
                    <img src="/assets/img/logo/confidentsmile.png" alt="" />
                </SwiperSlide>
                <SwiperSlide className="single-logo">
                    <img src="/assets/img/logo/itvault.png" alt="" />
                </SwiperSlide>
                <SwiperSlide className="single-logo">
                    <img src="/assets/img/logo/monalisa.png" alt="" />
                </SwiperSlide>
            </Swiper>
        </>
    )
}
