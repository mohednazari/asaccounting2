'use client'
import Link from "next/link"
import { usePathname } from 'next/navigation'
import { useEffect } from "react"

export default function Menu() {
    const routerPath = usePathname()
    useEffect(() => {
        if (routerPath == "/index-rtl-1") {
            document.documentElement.lang = "ar"
            document.documentElement.dir = "rtl"
            document.body.classList.add("rtl-version")
        } else {
            document.documentElement.lang = "en"
            document.documentElement.dir = ""
            document.body.classList.remove("rtl-version")
        }
    })
    return (
        <>

            <ul className="menu_list scroll">
                <li className="dropdown-parrent">
                    <Link href="/">Home</Link>
                </li>
                <li className="dropdown-parrent"><Link href="/about-1">About Us</Link>
                </li>
                {/* <li className="mega-menu-parrent"><Link href="#">Pages</Link>
                    <ul className="theme-mega-menu">
                        <li className="mega-menu">
                            <div className="single-mega-menu">
                                <h3 className="font-f-1">What We Do</h3>
                                <ul>
                                    <li><Link href="/case-study-1">Case Study 1</Link></li>
                                    <li><Link href="/case-study-2">Case Study 2</Link></li>
                                    <li><Link href="/single-case-study-1">Single Case</Link></li>
                                    <li><Link href="/service-1">Service Default</Link></li>
                                    <li><Link href="/service-2">Service 2</Link></li>
                                    <li><Link href="/service-3">Service Right</Link></li>
                                    <li><Link href="/single-service-1">Service Details </Link>
                                    </li>
                                    <li><Link href="/single-service-2">Details Right</Link></li>
                                </ul>
                            </div>
                            <div className="single-mega-menu">
                                <h3 className="font-f-1">News Letter</h3>
                                <ul>
                                    <li><Link href="/blog-1">Classic Blog</Link></li>
                                    <li><Link href="/blog-mesonry-1">Mesonry 1</Link></li>
                                    <li><Link href="/blog-mesonry-2">Mesonry 2</Link></li>
                                    <li><Link href="/blog-mesonry-3">Mesonry 3</Link></li>
                                    <li><Link href="/single-1">Single Right</Link></li>
                                    <li><Link href="/single-2">Single Default</Link></li>
                                    <li><Link href="/single-3">Single Left</Link></li>
                                    <li><Link href="/single-4">Single Fuild</Link></li>
                                </ul>
                            </div>
                            <div className="single-mega-menu">
                                <h3 className="font-f-1">WooCommerce</h3>
                                <ul>
                                    <li><Link href="/shop-1">Shop 1</Link></li>
                                    <li><Link href="/shop-2">Shop 2</Link></li>
                                    <li><Link href="/shop-3">Shop 3</Link></li>
                                    <li><Link href="/shop-inner-1">Shop Single</Link></li>
                                    <li><Link href="/cart">Cart</Link></li>
                                    <li><Link href="/cart-empty">Cart Empty</Link></li>
                                    <li><Link href="/wishlist">Wishlist</Link></li>
                                    <li><Link href="/singup">Sign Up</Link></li>
                                </ul>
                            </div>
                            <div className="single-mega-menu">
                                <h3 className="font-f-1">Pages</h3>
                                <ul>
                                    <li><Link href="/about-1">About 1</Link></li>
                                    <li><Link href="/about-2">About 2</Link></li>
                                    <li><Link href="/testimonial-1">Testimonial</Link></li>
                                    <li><Link href="/faq-1">FAQ</Link></li>
                                    <li><Link href="/team-1">Team</Link></li>
                                    <li><Link href="/career-1">Carrer 1</Link></li>
                                    <li><Link href="/404">404 Error</Link></li>
                                    <li><Link href="/signin">Sign In</Link></li>
                                </ul>
                            </div>
                            <div className="single-mega-menu">
                                <h3 className="font-f-1">Others</h3>
                                <ul>
                                    <li><Link href="/price-1">Pricing 1</Link></li>
                                    <li><Link href="/price-2">Pricing 2</Link></li>
                                    <li><Link href="/contact-1">Contact 1</Link></li>
                                    <li><Link href="/contact-2">Contact 2</Link></li>
                                    <li><Link href="/service-4">Service Left</Link></li>
                                    <li><Link href="/case-study-3">Case Study Right</Link></li>
                                    <li><Link href="/case-study-4">Case Study Left</Link></li>
                                    <li><Link href="/forgot">Forgot</Link></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </li> */}
                <li className="dropdown-parrent"><Link href="#">Our Services</Link>
                    <ul className="theme-dropdown">
                        <li><Link href="/personal-tax">Personal Tax</Link></li>
                        <li><Link href="/corporation-tax">Corporation Tax</Link></li>
                        <li><Link href="/financial-accounting">Financial Accounting</Link></li>
                        <li><Link href="/management-accounting">Management Accounting</Link></li>
                        <li><Link href="/payroll">Payroll</Link></li>
                        <li><Link href="/mortgages-loans">Mortgages and Loans</Link></li>
                        <li><Link href="/making-tax-digital">Making Tax Digital(MTD)</Link></li>
                    </ul>
                </li>
                <li className="dropdown-parrent"><Link href="/contact-1">Contact</Link>
                </li>
            </ul>
        </>
    )
}
