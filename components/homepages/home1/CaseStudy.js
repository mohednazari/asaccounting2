
'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

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
            slidesPerView: 2,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    }
}
export default function CaseStudy() {
    return (
        <>
            <div className="case-study-1 section-padding bg6">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 m-auto">
                            <div className="heading2 white-heading text-center">
                                <small data-aos="fade-up" data-aos-duration={600} className="heading-top">💡 Smart Financials for Brighter Practices.</small>
                                <h2 data-aos="fade-up" data-aos-duration={800}><span className="heilight-left">Other</span> Ares of Practice</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Swiper {...swiperOptions} className="case-studes owl-carousel" data-aos="fade-up" data-aos-duration={1200}>
                                <SwiperSlide className="single-case-study">
                                    <div className="case-study-img">
                                        <img src="/assets/img/case-study/casestudy1.jpg" alt="" />
                                    </div>
                                    <div className="case-study-content">
                                        <h4>Dental Practices</h4>
                                        <p>Specialized accounting support to help dental practices flourish with robust financial health. We navigate the complexities of the dental industry to streamline your financial operations, from daily bookkeeping to strategic planning.</p>
                                        {/* <Link href="#" className="theme-btn-7">Check out Check Study <span><i className="fa-solid fa-arrow-right" /></span></Link> */}
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="single-case-study">
                                    <div className="case-study-img">
                                        <img src="/assets/img/case-study/casestudy2.jpg" alt="" />
                                    </div>
                                    <div className="case-study-content">
                                        <h4>Dental Principals</h4>
                                        <p>Empowering dental principals with personalized financial advice and services. Our expertise aligns with your leadership role, ensuring the profitability and sustainability of your business.</p>
                                        {/* <Link href="#" className="theme-btn-7">Check out Check Study <span><i className="fa-solid fa-arrow-right" /></span></Link> */}
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="single-case-study">
                                    <div className="case-study-img">
                                        <img src="/assets/img/case-study/casestudy3.jpg" alt="" />
                                    </div>
                                    <div className="case-study-content">
                                        <h4>Dental Associates</h4>
                                        <p>Comprehensive financial management solutions for dental associates. From tax efficiency to investment advice, we provide the tools you need to succeed in your dental career.</p>
                                        {/* <Link href="#" className="theme-btn-7">Check out Check Study <span><i className="fa-solid fa-arrow-right" /></span></Link> */}
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="single-case-study">
                                    <div className="case-study-img">
                                        <img src="/assets/img/case-study/casestudy4.png" alt="" />
                                    </div>
                                    <div className="case-study-content">
                                        <h4>Dental Corporates</h4>
                                        <p>Strategic financial oversight for dental corporations. We deliver high-level financial insights and services that drive growth, optimize operations, and enhance corporate financial performance.</p>
                                        {/* <Link href="#" className="theme-btn-7">Check out Check Study <span><i className="fa-solid fa-arrow-right" /></span></Link> */}
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="single-case-study">
                                    <div className="case-study-img">
                                        <img src="/assets/img/case-study/casestudy5.jpg" alt="" />
                                    </div>
                                    <div className="case-study-content">
                                        <h4>Vocational Trainees (VT's)</h4>
                                        <p>Tailored financial guidance for dental vocational trainees. Starting your dental career on solid ground with expert advice on tax, student loan management, and financial planning.</p>
                                        {/* <Link href="#" className="theme-btn-7">Check out Check Study <span><i className="fa-solid fa-arrow-right" /></span></Link> */}
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
