import Layout from "@/components/layout/Layout"
 import Link from "next/link"
 export default function Page() {

     return (
         <>

             <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Payroll">
                 <div>
                     <div className="bg-13">
                            <div className="col-lg-6 m-auto inner-title text-center section-padding3">
                              <h2>Streamlined Payroll Services: Simplifying Your Financial Responsibilities</h2>
                          </div>
                         <div className="container">
                            <div className="row align-items-center">
                                <div className="padding-left padding-bottom col-lg-6 ">
                                    <div className="mr50">
                                        <div className="heading2 no-margin-heading">
                                            <small className="heading-top inner-heading-top">💼 Payroll Perfection: Streamlined & Compliant</small>
                                            <h2>
                                                Experience Meets Efficiency in Payroll Management
                                            </h2>
                                            <p>
                                                Navigating payroll complexities can be a daunting task for any business. At SA Dental Accountants, we bring a wealth of experience to simplify and streamline your payroll process. Whether you're setting up payroll for the first time or looking to enhance an existing system, we're here to guide you every step of the way. From registering you as an employer, if necessary, to designing a payroll process that is both compliant and tailored to your specific needs, our goal is to ensure your payroll management is as seamless and hassle-free as possible.
                                            </p>
                                            <div className="space30" />
                                            <Link className="theme-btn-11" href="#">Book Now
                                                <img src="/assets/img/icons/arrow-up-right.svg" alt="" /></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 mobile-hidden">
                                    <div className="about-bg-main-img position-relative ml50">
                                        <img className="border-radius" src="/assets/img/service/payroll-service.jpg" alt="" />
                                        <div className="corner-right-bottom-shape2 position-absolute">
                                            <img src="/assets/img/shapes/shape-right-bottom2.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*=====About end=======*/}
                    {/*=====Single blog start=======*/}
                    <div className="single-service-area padding-top inner-font-1 inner-blog-1" id="home">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="single-service-contents">
                                        <h3>Comprehensive Payroll Services: Your Assurance of Accuracy and Compliance</h3>
                                        <div className="service-list">
                                            <ul>
                                                <li>
                                                    <img src="/assets/img/icons/circle-check.svg" alt="" /> Monthly Payroll Services:
                                                </li>
                                                <p>We manage your payroll on a monthly basis, ensuring accuracy and timeliness in every cycle.</p>
                                                <li>
                                                    <img src="/assets/img/icons/circle-check.svg" alt="" /> Submission of Monthly RTI to HMRC:
                                                </li>
                                                <p>We take care of the Real Time Information (RTI) submissions to HMRC, ensuring you’re always up-to-date with your obligations.</p>
                                                <li>
                                                    <img src="/assets/img/icons/circle-check.svg" alt="" /> Electronic Payslips and Yearly P60s:
                                                </li>
                                                <p>Your employees will receive monthly electronic payslips and yearly P60s, providing them with clear, accessible records of their earnings and deductions.</p>
                                                <li>
                                                    <img src="/assets/img/icons/circle-check.svg" alt="" /> Yearly P35 Submission:
                                                </li>
                                                <p>We handle the annual submission of the P35 form, a summary of employee earnings and deductions for the year.</p>
                                                <li>
                                                    <img src="/assets/img/icons/circle-check.svg" alt="" /> HMRC Correspondences:
                                                </li>
                                                <p>Any correspondence related to payroll with HMRC is managed by us, providing you peace of mind and more time to focus on your business.</p>
                                            </ul>
                                        </div>
                                        <div className="space30" />
                                        <div className="single-blog-img">
                                            <img src="/assets/img/service/payroll-management.jpg" alt="" />
                                        </div>
                                        <div className="space30" />
                                        <h3>Your Partner in Payroll Precision</h3>
                                        <p>
                                            At SA Dental Accountants, we don’t just process numbers; we provide a payroll service that supports and enhances your business operations. By entrusting your payroll responsibilities to us, you gain not only time and peace of mind but also the assurance that your payroll is in expert hands.
                                        </p>
                                        <div className="space30" />
                                        <div className="col-12 text-center">
                                            <Link className="theme-btn-3" href="#"> Schedule A Call <span><i className="fa-solid fa-arrow-right" /></span></Link>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/*=====Single blog end=======*/}
                    {/*=====Service Start=======*/}
                    <div className="section-padding2">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <div className="single-inner-service trans-1">
                                        <div className="service-img">
                                            <img src="/assets/img/service/service-1.svg" alt="" />
                                        </div>
                                        <div className="service-content">
                                            <h3 className="font-f-3">Business Strategy</h3>
                                            <p className="font-f-3">
                                                Crafting unique themes, features, and sophisticated
                                                integrations into a complete experience has been our
                                                portfolio.
                                            </p>
                                            <Link className="theme-btn-11 full-btn" href="#">Get Basic Monthly</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="single-inner-service trans-1">
                                        <div className="service-img">
                                            <img src="/assets/img/service/service-2.svg" alt="" />
                                        </div>
                                        <div className="service-content">
                                            <h3 className="font-f-3">Technology Strategy</h3>
                                            <p className="font-f-3">
                                                Crafting unique themes, features, and sophisticated
                                                integrations into a complete experience has been our
                                                portfolio.
                                            </p>
                                            <Link className="theme-btn-11 full-btn" href="#">Get Basic Monthly</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="single-inner-service trans-1">
                                        <div className="service-img">
                                            <img src="/assets/img/service/service-3.svg" alt="" />
                                        </div>
                                        <div className="service-content">
                                            <h3 className="font-f-3">Product Strategy</h3>
                                            <p className="font-f-3">
                                                Making a mistake on your return can be costly. From missed
                                                deductions, or worse, the dreaded IRS audit.
                                            </p>
                                            <Link className="theme-btn-11 full-btn" href="#">Get Basic Monthly</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*=====Service end=======*/}
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
                                    <div className="sunscribe-form">
                                        <div className="subscribe-from-wrap">
                                            <form action="#">
                                                <input type="email" placeholder="Email Address" />
                                                <button type="submit" name="button">
                                                    Subscribe Now
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
