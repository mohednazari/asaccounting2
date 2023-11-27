
import Link from "next/link"

export default function TaxBusiness() {
    return (
        <>
            <div className="tax-business section-padding2 bg6" id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 m-auto">
                            <div className="heading2 white-heading text-center">
                                <small data-aos="fade-up" data-aos-duration={600} className="heading-top">Comprehensive Accounting Solutions 📊</small>
                                <h2 data-aos="fade-up" data-aos-duration={800}><span className="heilight-left">Our</span>Services</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6" data-aos="fade-up" data-aos-duration={600}>
                            <div className="single-business trans-1">
                                <div className="business-icon">
                                    <img src="/assets/img/icons/tax-business1.png" alt="" />
                                </div>
                                <h3>Personal Tax</h3>
                                <p>Navigate the complexities of personal tax with ease.
                                    Our dedicated team ensures you benefit from every deduction and credit available to you,
                                    optimizing your tax position and guiding you through the ever-changing tax landscape.
                                </p>
                                <Link href="#" className="theme-btn-7">Learn More <span><i className="fa-solid fa-arrow-right" /></span></Link>
                            </div>
                        </div>
                        <div className="col-md-6" data-aos="fade-up" data-aos-duration={600}>
                            <div className="single-business trans-1">
                                <div className="business-icon">
                                    <img src="/assets/img/icons/tax-business2.png" alt="" />
                                </div>
                                    <h3>Corporation Tax</h3>
                                    <p>Effectively minimize your corporate tax liabilities with our strategic planning and rigorous compliance. Our experts are continually updated on the latest regulations to provide proactive, goal-aligned solutions for your company's financial success.</p>
                                <Link href="#" className="theme-btn-7">Learn More <span><i className="fa-solid fa-arrow-right" /></span></Link>
                            </div>
                        </div>
                        <div className="col-md-6" data-aos="fade-up" data-aos-duration={1000}>
                            <div className="single-business trans-1">
                                <div className="business-icon">
                                    <img src="/assets/img/icons/tax-business3.png" alt="" />
                                </div>
                                <h3>Financial Accounting</h3>
                                <p>Experience clarity and precision in your financial reporting. Our financial accounting services provide accurate insights into your financial health, enabling informed decision-making for your dental practice.</p>
                                <Link href="#" className="theme-btn-7">Learn More <span><i className="fa-solid fa-arrow-right" /></span></Link>
                            </div>
                        </div>
                        <div className="col-md-6" data-aos="fade-up" data-aos-duration={1200}>
                            <div className="single-business trans-1">
                                <div className="business-icon">
                                    <img src="/assets/img/icons/tax-business4.png" alt="" />
                                </div>
                                <h3>Management Accounting</h3>
                                <p>Empower your dental practice with detailed management reports and performance analysis. We help you understand the story behind the numbers, facilitating effective management and operational efficiency.</p>
                                <Link href="#" className="theme-btn-7">Learn More <span><i className="fa-solid fa-arrow-right" /></span></Link>
                            </div>
                        </div>
                        <div className="col-md-6" data-aos="fade-up" data-aos-duration={1400}>
                            <div className="single-business trans-1">
                                <div className="business-icon">
                                    <img src="/assets/img/icons/tax-business4.png" alt="" />
                                </div>
                                <h3>Payroll</h3>
                                <p>Simplify your payroll process with our comprehensive payroll services. From processing payments to filing year-end reports, we ensure your staff are paid correctly and on time, every time.</p>
                                <Link href="#" className="theme-btn-7">Learn More <span><i className="fa-solid fa-arrow-right" /></span></Link>
                            </div>
                        </div>
                        <div className="col-md-6" data-aos="fade-up" data-aos-duration={1600}>
                            <div className="single-business trans-1">
                                <div className="business-icon">
                                    <img src="/assets/img/icons/tax-business4.png" alt="" />
                                </div>
                                <h3>Mortgages and Loans</h3>
                                <p>Secure the best possible terms for your mortgages and loans with our expert advisory. We navigate the financing landscape to find solutions that support the growth and stability of your dental practice.</p>
                                <Link href="#" className="theme-btn-7">Learn More <span><i className="fa-solid fa-arrow-right" /></span></Link>
                            </div>
                        </div>
                        <div className="space20" />
                        <div className="col-12 text-center" data-aos="fade-up" data-aos-duration={1400}>
                            <Link className="theme-btn-3" href="#">Explore More Services <span><i className="fa-solid fa-arrow-right" /></span></Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
