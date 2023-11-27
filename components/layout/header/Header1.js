import Link from "next/link"
import Menu from "../Menu"

export default function Header1({ scroll, isMobileMenu, handleMobileMenu }) {
    return (
        <>
            <header id="header" className={`header header-2 header-absolute d-none d-lg-block ${scroll ? "sticky" : ""}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="header-elements">
                                <div className="header_menu_area">
                                    <div className="logo">
                                        <Link href="/"><img src="assets/img/logo/logo.png" alt="" style={{width: "50px", height: "auto"}} /></Link>
                                    </div>
                                    <div className="main-menu">
                                        <div className="menu-wrap">
                                            <Menu />
                                        </div>
                                    </div>
                                </div>
                                <div className="desktop-info">
                                    <div className="quick_contact">
                                        <div className="quick_contact_icon bg-27">
                                            <i className="fa-light fa-phone" />
                                        </div>
                                        <div className="quick_contact_content">
                                            <small>Speak to Our Advisors</small>
                                            <Link href="/tel:02080 900 372">02080 900 372</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}
