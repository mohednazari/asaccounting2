import Link from "next/link"
import { useState } from 'react'
export default function MobileMenu({ isMobileMenu, handleMobileMenu }) {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <div className="mobile-header mobile-header-4 d-lg-none">
                <div className="container-fluid">
                    <div className="col-12">
                        <div className="mobile-header-elements">
                            <div className="mobile-logo">
                                <Link   Link href="/"><img src="assets/img/logo/logo.png" alt="" style={{width: "50px", height: "auto"}} /></Link>
                            </div>
                            <div className="mobile-nav-icon" onClick={handleMobileMenu}>
                                <i className="fa-solid fa-bars" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`mobile-sidebar ${isMobileMenu ? "mobile-menu-active" : ""}`}>
                <div className="menu-close" onClick={handleMobileMenu}>
                    <i className="fa-solid fa-xmark" />
                </div>
                <div className="mobile-nav">
                    <ul className="mobile-nav-list">
                        <li>
                            <Link href="#">Home</Link>
                        </li>
                        <li><Link href="/about-1">About Us</Link>
                        </li>
                        <li><Link href="#">Our Services</Link>
                            <span className={isActive.key == 3 ? "submenu-button submenu-opened" : "submenu-button"} onClick={() => handleToggle(3)}><em /></span>
                            <ul className="sub-menu" style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                                <li><Link href="/personal-tax">Personal Tax</Link></li>
                                <li><Link href="/corporation-tax">Corporation Tax</Link></li>
                                <li><Link href="/financial-accounting">Financial Accounting</Link></li>
                                <li><Link href="/management-accounting">Management Accounting</Link></li>
                                <li><Link href="/payroll">Payroll</Link></li>
                                <li><Link href="/mortgages-loans">Mortgages and Loans</Link></li>
                                <li><Link href="/making-tax-digital">Making Tax Digital (MTD)</Link></li>
                            </ul>
                        </li>
                        <li><Link href="/contact-1">Contact</Link>
                        </li>
                    </ul>
                    <div className="mobile-contact">
                        <div className="single-footer">
                            <h3>Get in touch</h3>
                            <div className="footer-contact">
                                <div className="single-contact">
                                    <div className="contact-icon">
                                        <img src="/assets/img/icons/contact-phone2.svg" alt="" />
                                    </div>
                                    <a href="tel:02080900372">02080 900 372</a>
                                </div>
                            </div>
                            <div className="footer-contact">
                                <div className="single-contact">
                                    <div className="contact-icon">
                                        <img src="/assets/img/icons/contact-email2.svg" alt="" />
                                    </div>
                                    <a href="mailto:Admin@SADentalAccountants.Com">Admin@SADentalAccountants.Com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
