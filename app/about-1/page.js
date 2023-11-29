
import CounterUp from "@/components/elements/CounterUp"
import Faq1 from "@/components/elements/Faq1"
import Layout from "@/components/layout/Layout"
import TestimonialSlider3 from "@/components/slider/TestimonialSlider3"
import Link from "next/link"
export default function Page() {


    return (
        <>
        

            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="ABOUT SA Dental Accountants">
                <div>
                    <div className="bg-13-haf">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="about-haf-img">
                                        <img className="border-radius" src="/assets/img/about/about-6.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*=====About haf image end=======*/}
                    {/*=====About content start=======*/}
                    <div className="section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="heading2 no-margin-heading">
                                        <h2>Dedicated Expertise in Your Industry</h2>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="heading2 no-margin-heading">
                                        <p>
                                            At SA Dental Accountants, our identity is shaped by our unique specialization as chartered certified accountants dedicated exclusively to the dental and healthcare sectors. Our expertise goes beyond traditional accounting; we delve deep into the intricacies and nuances of your specific professional field. This specialized focus allows us to provide a comprehensive suite of services that includes Financial and Management Accounting, complemented by advanced Taxation advice, all meticulously tailored to meet the distinct needs of dentists and healthcare practitioners.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="heading2 no-margin-heading">
                                        <p>
                                            ● <strong>Deep Sector Knowledge:</strong> Our firm's focus is deeply rooted in the dental and healthcare sectors, where we have cultivated a profound understanding of the unique financial and regulatory landscapes.
                                        </p>
                                        <p>
                                            ● <strong>Bespoke Accounting Solutions:</strong> Tailored specifically for healthcare professionals, our accounting services address the distinct challenges and opportunities in your field.
                                        </p>
                                        <p>
                                            ● <strong>Continuous Learning and Adaptation:</strong> We keep our fingers on the pulse of industry changes, ensuring our advice and services remain relevant and forward-thinking.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*=====About content end=======*/}
                    {/*=====About start=======*/}
                    <div className="about-inner bg-29">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="about-bg-main-img position-relative mr50">
                                        <img src="/assets/img/about/about22.png" alt="" />
                                        <div className="corner-right-bottom-shape2 position-absolute">
                                            <img src="/assets/img/shapes/shape-right-bottom2.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="ml50">
                                        <div className="heading2 no-margin-heading">
                                            <small className="heading-top inner-heading-top">🌟 Expertise Legacy: Specialized Excellence</small>
                                            <h2>
                                                Our Legacy of Expertise
                                            </h2>
                                            <p>
                                            ● <strong>Invaluable Industry Experience:</strong> Years of focused experience in the dental and healthcare sectors have equipped us with profound knowledge and insights, which we leverage to your advantage.
                                            </p>
                                            <p>
                                                ● <strong>Focused Financial Services: </strong> From intricate tax planning tailored for your industry to strategic financial management, we provide specialized services that address the unique financial aspects of your practice.
                                            </p>
                                            <p>
                                                ● <strong>Continuous Learning and Adaptation:</strong> We keep our fingers on the pulse of industry changes, ensuring our advice and services remain relevant and forward-thinking.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*=====About end=======*/}
                    {/*=====Inner Counter start=======*/}
                    <div className="inner-counter-1 section-padding position-relative">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="heading2 no-margin-heading mr50">
                                        <small className="heading-top inner-heading-top">🤝 Your Journey, Our Partnership: Growing Together</small>
                                        <h2>
                                            Partners in Your Professional Journey
                                        </h2>
                                        <p>
                                        ● <strong>Beyond Accounting:</strong> We see our role as more than just accountants; we are your partners in a shared journey towards success. Our aim is to empower your practice with the financial knowledge and tools for sustained growth and prosperity.
                                        </p>
                                        <p>
                                            ● <strong>A Relationship Built on Trust: </strong> Our identity as dental specialist accountants is a testament to our commitment. We strive to offer exceptional service, insightful guidance, and a lasting partnership that evolves with your practice.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="counter2 ml50 position-relative">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="single-counter">
                                                    <div className="conter-icon">
                                                        <img src="/assets/img/icons/service-9.png" alt="" />
                                                    </div>
                                                    <h2>£<CounterUp count={500} />K</h2>
                                                    <p>Quarterly Volume</p>
                                                </div>
                                                <div className="single-counter">
                                                    <div className="conter-icon">
                                                        <img src="/assets/img/icons/service-16.png" alt="" />
                                                    </div>
                                                    <h2><CounterUp count={469} />+</h2>
                                                    <p>Positive Feedback</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="single-counter mt-5">
                                                    <div className="conter-icon">
                                                        <img src="/assets/img/icons/service-12.png" alt="" />
                                                    </div>
                                                    <h2>£<CounterUp count={100} />M</h2>
                                                    <p>Managed Finances</p>
                                                </div>
                                                <div className="single-counter">
                                                    <div className="conter-icon">
                                                        <img src="/assets/img/icons/service-14.png" alt="" />
                                                    </div>
                                                    <h2><CounterUp count={1000} />+</h2>
                                                    <p>Financial Statements</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="corner-right-bottom-shape2 position-absolute">
                                            <img src="/assets/img/shapes/shape-right-bottom2.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="inner-counter-bg-1">
                            <img src="/assets/img/shapes/shape-8.png" alt="" />
                        </div>
                    </div>
                    {/*=====Inner Counter start =======*/}
                    {/*=====Testimonial start=======*/}
                    <div className="testimonial-3 bg-19 section-padding2 inner-font-1 inner-testimonial-1 _relative">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 m-auto">
                                    <div className="heading2 text-center">
                                        <small className="heading-top inner-heading-top">Client Testimonials: Real Success Stories 🌟</small>
                                        <h2>We love our clients, and they love us.</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <TestimonialSlider3 />
                                </div>
                            </div>
                        </div>
                        <div className="shape-007">
                            <img src="/assets/img/shapes/shape007.svg" alt="" />
                        </div>
                    </div>
                    {/*=====Testimonial end=======*/}
                    {/*=====Team start=======*/}
                    <div className="team-2 section-padding2 inner-font-1">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 m-auto">
                                    <div className="heading2 text-center">
                                        <small className="heading-top inner-heading-top"><img src="/assets/img/icons/hands.svg" alt="" />Our
                                            Success in
                                            Numbers</small>
                                        <h2>Our team of financial professionals.</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-lg-3 col-md-6">
                                    <div className="single-team">
                                        <div className="team-sides team-font-side">
                                            <div className="team-img">
                                                <img src="/assets/img/team/team10.jpg" alt="" />
                                            </div>
                                            <div className="team-content bg-18">
                                                <Link className="weight-700" href="#">Saeed Soleymani</Link>
                                                <p>CEO</p>
                                            </div>
                                        </div>
                                        <div className="team-sides team-back-side">
                                            <div className="team-content bg-18">
                                                <Link className="weight-700" href="#">Saeed Soleymani</Link>
                                                <p>CEO</p>
                                                <div className="space10" />
                                                <div className="team-socials">
                                                    <ul>
                                                        <li>
                                                            <Link data-bs-toggle="tooltip" title="Linked in" href="#"><i className="fa-brands fa-linkedin-in" /></Link>
                                                        </li>
                                                        <li>
                                                            <Link data-bs-toggle="tooltip" title="Facebook" href="#"><i className="fa-brands fa-facebook-f" /></Link>
                                                        </li>
                                                        <li>
                                                            <Link data-bs-toggle="tooltip" title="Instagram" href="#"><i className="fa-brands fa-instagram" /></Link>
                                                        </li>
                                                        <li>
                                                            <Link data-bs-toggle="tooltip" title="TikTok" href="#"><i className="fa-brands fa-tiktok" /></Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="single-team">
                                        <div className="team-sides team-font-side">
                                            <div className="team-img">
                                                <img src="/assets/img/team/team11.jpg" alt="" />
                                            </div>
                                            <div className="team-content bg-18">
                                                <Link className="weight-700" href="#">Ali</Link>
                                                <p>CEO</p>
                                            </div>
                                        </div>
                                        <div className="team-sides team-back-side">
                                            <div className="team-content bg-18">
                                                <Link className="weight-700" href="#">Ali</Link>
                                                <p>CEO</p>
                                                <div className="space10" />
                                                <div className="team-socials">
                                                    <ul>
                                                        <li>
                                                            <Link data-bs-toggle="tooltip" title="Linked in" href="#"><i className="fa-brands fa-linkedin-in" /></Link>
                                                        </li>
                                                        <li>
                                                            <Link data-bs-toggle="tooltip" title="Facebook" href="#"><i className="fa-brands fa-facebook-f" /></Link>
                                                        </li>
                                                        <li>
                                                            <Link data-bs-toggle="tooltip" title="Instagram" href="#"><i className="fa-brands fa-instagram" /></Link>
                                                        </li>
                                                        <li>
                                                            <Link data-bs-toggle="tooltip" title="TikTok" href="#"><i className="fa-brands fa-tiktok" /></Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*=====Team end=======*/}
                    {/*=====Faqs start=======*/}
                    <div className="faqs-area padding-bottom inner-font-1 inner-faq-1">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="heading2 mr50">
                                        <small className="heading-top inner-heading-top">🔍 Precision Accounting: Elevating Healthcare Finance</small>
                                        <h2>
                                            Embrace Specialized Accounting with SA Dental Accountants
                                        </h2>
                                        <p>
                                            At SA Dental Accountants, we are not just accountants; we are dedicated champions for the financial wellbeing of dental and healthcare professionals. Experience the impact of specialized accounting on your practice.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="ml50">
                                        <div className="faqs">
                                            <Faq1 />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*=====Faqs end=======*/}
                    {/*=====Subscribe start=======*/}
                    <div className="subscribe-4 bg12 padding-90 inner-font-1 inner-subscribe">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="heading4 white-heading inner-heading no-margin-heading">
                                        <h2>Want to join our team?</h2>
                                        <p>
                                            We are always looking for talented people, We here to help you
                                            to open your bright future.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-6 offset-lg-1">
                                    <div className="subscribe-form">
                                        <div className="subscribe-from-wrap">
                                            <form action="#">
                                                <input type="email" placeholder="Email Address" />
                                                <button type="submit" name="button">
                                                    Join us
                                                    <img src="/assets/img/icons/arrow-up-right-black.svg" alt="" />
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Layout>
        </>
    )
}