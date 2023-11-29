'use client'
import Link from "next/link"
import { Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay],
    slidesPerView: 3,
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
export default function TestimonialSlider3() {
    return (
        <>
            <Swiper {...swiperOptions} className="testimonials-3 owl-carousel">
                <SwiperSlide className="single-testimonial">
                    <div className="testimonial-icon">
                        <img src="/assets/img/icons/quote-1.png" alt="" />
                    </div>
                    <p>
                        "As a small business owner, I was daunted by the complexities of financial management. That was until I found SA Dental Accountants. Their team not only simplified tax and accounting processes for me but also provided strategic advice that has been instrumental in our growth. Their personalized approach made me feel like a valued client, and their expertise in the healthcare sector is truly unmatched. I can't recommend them enough. They've been more than accountants; they've been crucial partners in our journey."
                    </p>
                    <div className="author-reviews">
                        <div className="author">
                            <Link href="#">Dr. Emily Stanton, Stanton Dental Clinic</Link>
                        </div>
                        <div className="review-1">
                            <div className="review">
                                <ul>
                                    <li><i className="fa-solid fa-star" /></li>
                                    <li><i className="fa-solid fa-star" /></li>
                                    <li><i className="fa-solid fa-star" /></li>
                                    <li><i className="fa-solid fa-star" /></li>
                                    <li><i className="fa-solid fa-star-half" /></li>
                                </ul>
                            </div>
                            <div className="review-rate">
                                <p>(4.5)</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="single-testimonial">
                    <div className="testimonial-icon">
                        <img src="/assets/img/icons/quote-1.png" alt="" />
                    </div>
                    <p>
                        “When it comes to accounting for my dental practice, SA Dental Accountants have proven to be in a league of their own. The level of detail and industry knowledge they bring to the table is exceptional. They've consistently gone above and beyond to ensure my financials are in perfect order, allowing me to focus on my patients. Their dedication to our success is evident in every interaction.”
                    </p>
                    <div className="author-reviews">
                        <div className="author">
                            <Link href="#">Dr. Aarav Patel, BrightSmile Orthodontics</Link>
                        </div>
                        <div className="review-1">
                            <div className="review">
                                <ul>
                                    <li><i className="fa-solid fa-star" /></li>
                                    <li><i className="fa-solid fa-star" /></li>
                                    <li><i className="fa-solid fa-star" /></li>
                                    <li><i className="fa-solid fa-star" /></li>
                                    <li><i className="fa-solid fa-star-half" /></li>
                                </ul>
                            </div>
                            <div className="review-rate">
                                <p>(4.5)</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="single-testimonial">
                    <div className="testimonial-icon">
                        <img src="/assets/img/icons/quote-1.png" alt="" />
                    </div>
                    <p>
                        “SA Dental Accountants have been an asset to my dental practice. Their expertise in healthcare accounting is evident through their comprehensive financial management and strategic tax planning. They've provided insights that have significantly improved my practice's financial health. Their team is approachable, always ready to answer questions and offer personalized advice. Truly a partner I trust.”
                    </p>
                    <div className="author-reviews">
                        <div className="author">
                            <Link href="#">Dr. Sofia Bell, New Age Dentistry</Link>
                        </div>
                        <div className="review-1">
                            <div className="review">
                                <ul>
                                    <li><i className="fa-solid fa-star" /></li>
                                    <li><i className="fa-solid fa-star" /></li>
                                    <li><i className="fa-solid fa-star" /></li>
                                    <li><i className="fa-solid fa-star" /></li>
                                    <li><i className="fa-solid fa-star-half" /></li>
                                </ul>
                            </div>
                            <div className="review-rate">
                                <p>(4.5)</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="single-testimonial">
                    <div className="testimonial-icon">
                        <img src="/assets/img/icons/quote-1.png" alt="" />
                    </div>
                    <p>
                        “Consultia law firm is wonderful. I have had the chance to
                        work with three of the lawyers and they all have been
                        wonderful. They will tell you when you need a lawyer and when
                        you don't. They actually try to save you money. They respond
                        very fast to questions and try to help you understand what is
                        going on.”
                    </p>
                    <div className="author-reviews">
                        <div className="author">
                            <Link href="#">Jason Behrendorff</Link>
                        </div>
                        <div className="review-1">
                            <div className="review">
                                <ul>
                                    <li><i className="fa-solid fa-star" /></li>
                                    <li><i className="fa-solid fa-star" /></li>
                                    <li><i className="fa-solid fa-star" /></li>
                                    <li><i className="fa-solid fa-star" /></li>
                                    <li><i className="fa-solid fa-star-half" /></li>
                                </ul>
                            </div>
                            <div className="review-rate">
                                <p>(4.5)</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
