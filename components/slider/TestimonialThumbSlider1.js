'use client'
import Link from "next/link"
import { useEffect, useState } from "react"
import Slider from "react-slick"

const TestimonialThumbSlider1 = () => {
    const [nav1, setNav1] = useState(null)
    const [nav2, setNav2] = useState(null)
    const [slider1, setSlider1] = useState(null)
    const [slider2, setSlider2] = useState(null)

    useEffect(() => {
        setNav1(slider1)
        setNav2(slider2)
    }, [slider2, slider1])

    const settingsMain = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        // prevArrow: (".testimonial-prev-arrow"),
        // nextArrow: (".testimonial-next-arrow"),
        fade: true,
        loop: true,
    }

    const settingsThumbs = {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        loop: true,
        centerMode: true,
        focusOnSelect: true,
        arrows: false,
    }

    return (
        <>

            <div className="testimonial-sliders">
                <Slider
                    {...settingsThumbs}
                    asNavFor={nav1}
                    ref={(slider) => setSlider2(slider)}
                    className="testimonial-nav ">
                    <div className="single-testimonial-nav">
                        <img src="/assets/img/testimonial/author1.jpg" alt="" />
                    </div>
                    <div className="single-testimonial-nav">
                        <img src="/assets/img/testimonial/author2.jpg" alt="" />
                    </div>
                    <div className="single-testimonial-nav">
                        <img src="/assets/img/testimonial/author3.jpg" alt="" />
                    </div>
                    <div className="single-testimonial-nav">
                        <img src="/assets/img/testimonial/author4.jpg" alt="" />
                    </div>
                    <div className="single-testimonial-nav">
                        <img src="/assets/img/testimonial/author5.jpg" alt="" />
                    </div>
                    <div className="single-testimonial-nav">
                        <img src="/assets/img/testimonial/author3.jpg" alt="" />
                    </div>
                </Slider>
                <Slider
                    {...settingsMain}
                    asNavFor={nav2}
                    ref={(slider) => setSlider1(slider)}
                    className="slider-testimonial">
                    <div className="single-testimonial">
                        <h5>“The financial guidance from ASAccounting has been a game-changer for our dental practice. Their tax strategies significantly reduced our liabilities and improved our bottom line.”</h5>
                        <div className="author">
                            <Link href="#">Dr. Emily Nguyen</Link>
                            <p>DDS, BrightSmile Clinics</p>
                        </div>
                    </div>
                    <div className="single-testimonial">
                        <h5>“Working with ASAccounting, we've not only saved on taxes but also streamlined our accounting processes. Their team understands the dental business inside out.”</h5>
                        <div className="author">
                            <Link href="#">Dr. Jordan Clark</Link>
                            <p>DMD, Clark Dental Group</p>
                        </div>
                    </div>
                    <div className="single-testimonial">
                        <h5>“ASAccounting provided us with comprehensive financial services that have been crucial in our practice's growth. Their attention to detail and industry knowledge is unmatched.”</h5>
                        <div className="author">
                            <Link href="#">Dr. Sophia Martin</Link>
                            <p>Orthodontist, Martin Orthodontics</p>
                        </div>
                    </div>
                </Slider>
            </div>

        </>
    )
}

export default TestimonialThumbSlider1