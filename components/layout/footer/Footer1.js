import Link from "next/link"
export default function Footer1() {
    return (
        <>
            <footer className="footer-area padding-top footer-2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-footer mr50">
                                <Link href="/"><img src="assets/img/logo/logo.png" alt="" style={{width: "50px", height: "auto"}} /></Link>
                                <div className="space20" />
                                <p>Your Trusted Partner in Dental Practice Financial Management — Advancing Together Towards Greater Success and Sustainability.</p>
                            </div>
                        </div>
                        <div className="col-lg col-md-6">
                            <div className="single-footer">
                                <h3>Our Company</h3>
                                <div className="footer-menu">
                                    <ul>
                                        <li><Link href="#">About us</Link></li>
                                        <li><Link href="#">Privacy Policy</Link></li>
                                        <li><Link href="#">User Terms</Link></li>
                                        <li><Link href="#">Help Centre</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer">
                                <h3>Get in touch</h3>
                                <div className="footer-contact">
                                    <div className="single-contact">
                                        <div className="contact-icon">
                                            <img src="/assets/img/icons/contact-phone2.svg" alt="" />
                                        </div>
                                        <Link href="#">02080 900 372</Link>
                                    </div>
                                </div>
                                <div className="footer-contact">
                                    <div className="single-contact">
                                        <div className="contact-icon">
                                            <img src="/assets/img/icons/contact-email2.svg" alt="" />
                                        </div>
                                        <Link href="#">admin@sadentalaccountants.com</Link>
                                    </div>
                                </div>
                                <div className="footer-contact">
                                    <div className="single-contact">
                                        <div className="contact-icon">
                                            <img src="/assets/img/icons/contact-3.svg" alt="" />
                                        </div>
                                        <Link href="#">246, Woodhouse Road, North
                                        Finchley, London, N12 0RU</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center copyright2">
                        <div className="col-lg-6">
                            <p>© 2023 ASAccounting | Design by AtlasVision. All Rights Reserved.</p>
                        </div>
                        <div className="col-lg-6 text-right">
                            <div className="social social2">
                                <ul>
                                    <li><Link data-bs-toggle="tooltip" title="Linked in" href="#"><i className="fa-brands fa-linkedin-in" /></Link>
                                    </li>
                                    <li><Link data-bs-toggle="tooltip" title="Facebook" href="#"><i className="fa-brands fa-facebook-f" /></Link></li>
                                    <li><Link data-bs-toggle="tooltip" title="Instagram" href="#"><i className="fa-brands fa-instagram" /></Link></li>
                                    <li><Link data-bs-toggle="tooltip" title="TikTok" href="#"><i className="fa-brands fa-tiktok" /></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
