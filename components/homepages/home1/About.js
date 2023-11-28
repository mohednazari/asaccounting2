
import Link from "next/link"

export default function About() {
    return (
        <>

            <div className="about-area section-padding bg5-left">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="about-bg-21 mr50" data-aos="zoom-out" data-aos-duration={800}>
                                <div className="about-bg-main-img position-relative top-left-polygon-1">
                                    <img src="/assets/img/about/about21.png" alt="" />
                                    <div className="corner-right-bottom-shape2 position-absolute">
                                        <img src="/assets/img/shapes/shape-right-bottom2.png" alt="" />
                                    </div>
                                    <div className="corner-shape2-left position-absolute">
                                        <img src="/assets/img/shapes/tax-shape2.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="heading2 no-margin-heading ml50">
                                <small data-aos="fade-left" data-aos-duration={600} className="heading-top">👨‍⚕️ Financial Expertise for Your Dental Care Excellence.</small>
                                <h2 data-aos="fade-left" data-aos-duration={800}>Excellence in Accounting for Dental Professionals</h2>
                                <p data-aos="fade-left" data-aos-duration={1000}>At SA Dental Accountants, we are more than just accountants; we are the guardians of your financial well-being. Our firm is built on the cornerstone of trust and specialized knowledge in the dental sector. We pride ourselves on providing comprehensive accounting services tailored to the unique financial needs of dental professionals. Through meticulous financial management and strategic foresight, we empower your practice to flourish while you focus on providing exceptional dental care. Our dedicated team is committed to your success, ensuring each financial decision aligns with your practice's vision and goals.</p>
                                <p data-aos="fade-left" data-aos-duration={1000}>Learn more about our story, our values, and the people who make SA Dental Accountants the preferred financial ally for dental practitioners.</p>
                                <div className="space50" />
                                <div className="button-group" data-aos="fade-left" data-aos-duration={1200}>
                                    <Link className="theme-btn-2" href="#">More About Us <span><i className="fa-solid fa-arrow-right" /></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
